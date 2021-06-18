import React from 'react';
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

import './tensorflow.scss';

class Tensorflow extends React.Component {
    constructor() {
        super();

        this.state = {} 
    }  

    // Load, Format and Visualise the input data
    async run() {
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

        // Load and plot the original input data that we are going to train on.
        const data = await getData();
        const values = data.map(d => ({
          x: d.horsepower,
          y: d.mpg,
        }));
      
        tfvis.render.scatterplot(
          {name: 'Horsepower v MPG'},
          {values},
          {
            xLabel: 'Horsepower',
            yLabel: 'MPG',
            height: 300
          }
        );

        // Define the model architecture
        function createModel() {
            // Create a sequential model
            const model = tf.sequential();
        
            // Add a single input layer
            model.add(tf.layers.dense({inputShape: [1], units: 1, useBias: true}));
        
            // Add an output layer
            model.add(tf.layers.dense({units: 1, useBias: true}));
        
            return model;
        } 
      
        // Create the model
        const model = createModel();
        tfvis.show.modelSummary({name: 'Model Summary'}, model);
    }     

    render() {
        return (
            <div className='tensorflow'>
                <h1>Hello Tensorflow</h1>
                <button className="button" onClick={this.run}>Visualise Data</button>
            </div>
        )
    }
};

export default Tensorflow;