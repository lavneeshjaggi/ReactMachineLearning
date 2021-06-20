import * as tf from '@tensorflow/tfjs';

var data;
var model;
var tensorData;
var inputs;
var labels;

export async function prepareTheModel() {
    // Load and plot the original input data that we are going to train on.
    data = await getData();

    // Create the model
    model = createModel();

    // Convert the data to a form we can use for training.
    tensorData = convertToTensor(data);
    inputs = tensorData.inputs;
    labels = tensorData.labels;

    // Train the model
    await trainModel(model, inputs, labels);
}

// Function to help user make predictions on custom data
export function makePrediction(userInput) {
    var { inputMin, inputMax, labelMin, labelMax } = tensorData;

    if(userInput < 1 || userInput > 400) 
        return 0;

    const num = (userInput - inputMin.dataSync()) / (inputMax.dataSync() - inputMin.dataSync());

    const preds = model.predict(tf.tensor2d([num], [1, 1]));

    const unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);

    return unNormPreds.dataSync()[0].toFixed(2);
}

// 1. LOAD, FORMAT AND VISUALISE THE INPUT DATA
// Get the car data reduced to just the variables we are interested and cleaned of missing data.
async function getData() {
    const carsDataResponse = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    const carsData = await carsDataResponse.json();
    const cleaned = carsData.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
    .filter(car => (car.mpg != null && car.horsepower != null));
    
    return cleaned;
}

// 2. DEFINE THE MODEL ARCHITECTURE
function createModel() {
    // Create a sequential model
    const model = tf.sequential();

    // Add an input layer
    model.add(tf.layers.dense({inputShape: [1], units: 64, useBias: true}));

    model.add(tf.layers.dense({units: 32, activation: 'sigmoid'}));
    model.add(tf.layers.dense({units: 32, activation: 'sigmoid'}));

    // Add an output layer
    model.add(tf.layers.dense({units: 1, useBias: true}));

    return model;
} 

// 3. PREPARE THE DATA FOR TRAINING
/**
 * Convert the input data to tensors that we can use for machine
 * learning. We will also do the important best practices of _shuffling_
 * the data and _normalizing_ the data
 * MPG on the y-axis.
 */
function convertToTensor(data) {
    // Wrapping these calculations in a tidy will dispose any
    // intermediate tensors.

    return tf.tidy(() => {
        // Step 1. Shuffle the data
        tf.util.shuffle(data);
    
        // Step 2. Convert data to Tensor
        const inputs = data.map(d => d.horsepower)
        const labels = data.map(d => d.mpg);
    
        const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
        const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
    
        //Step 3. Normalize the data to the range 0 - 1 using min-max scaling
        const inputMax = inputTensor.max();
        const inputMin = inputTensor.min();
        const labelMax = labelTensor.max();
        const labelMin = labelTensor.min();
    
        const normalizedInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
        const normalizedLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));
    
        return {
            inputs: normalizedInputs,
            labels: normalizedLabels,
            // Return the min/max bounds so we can use them later.
            inputMax,
            inputMin,
            labelMax,
            labelMin,
        }
    });
}

// 4. TRAIN THE MODEL
async function trainModel(model, inputs, labels) {
    // Prepare the model for training.
    model.compile({
        optimizer: tf.train.adam(),
        loss: tf.losses.meanSquaredError,
        metrics: ['mse'],
    });
    
    const batchSize = 64;
    const epochs = 100;
    
    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
    });
}
