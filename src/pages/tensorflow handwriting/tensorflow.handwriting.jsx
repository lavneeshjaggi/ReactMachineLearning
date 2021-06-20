import React from 'react';

import { prepareTheModel } from './tensorflow.handwriting.functions';
import Spinner from '../../components/spinner/spinner.component';

import './tensorflow.handwriting.styles.scss';

class TensorflowHandwriting extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      image: undefined,
      answer: null
    }
  }

  async componentDidMount() {
    // await prepareTheModel();

    this.setState({ loading: false });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleImageChange = (event) => {

    if(event.target.files && event.target.files[0]) {
      this.setState({ image: URL.createObjectURL(event.target.files[0]) })
    }
  }

  render() {
    if(this.state.loading) {
      return <Spinner />
    }

    return (
        <div className="tensorflowhandwriting">
          <h1>Tensorflow Handwriting</h1>
          <h1 className="prediction">Prediction: {this.state.answer}</h1>
          <img className="image" src={this.state.image} alt="Image Will Be Displayed Here" />
          <form className="form" onSubmit={this.handleSubmit}>
            <input 
              className="input" 
              name="file" 
              onChange={this.handleImageChange} 
              type="file" 
            />
            <button className="button">Submit</button>
          </form>
        </div>
    )
  }
}

export default TensorflowHandwriting;