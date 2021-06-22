import React from 'react';

import { prepareTheModel, doPrediction } from './tensorflow.digitrecognition.functions';
import Spinner from '../../components/spinner/spinner.component';

import './tensorflow.digitrecognition.styles.scss';

class TensorflowHandwriting extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      image: "https://media3.giphy.com/media/26uf2JHNV0Tq3ugkE/200.gif",
      answer: null,
    }
  }

  async componentDidMount() {
    await prepareTheModel();

    this.setState({ loading: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var img = new Image();
    img.src = this.state.image;

    this.setState({ answer: doPrediction(img) });
  }

  handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0])
      });
    }
  }

  render() {
    if(this.state.loading) {
      return <Spinner />
    }

    return (
        <div className="tensorflowhandwriting">
          <h1 className="canvas-heading">Digit Recognizer using TensorFlow.js Demo</h1>
          <h1 className="prediction">Prediction: {this.state.answer}</h1>
          <img className="image" src={this.state.image} alt="" />
          <form className="form" onSubmit={this.handleSubmit}>
            <input className="input" onChange={this.handleChange} type="file" />
            <button className="button" type="submit"><h3>Submit</h3></button>
          </form>
        </div>
    )
  }
}

export default TensorflowHandwriting;