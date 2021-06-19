import React , { Suspense } from 'react';

import { makePrediction, prepareTheModel } from './tensorflow.mileage.function';

import Spinner from '../../components/spinner/spinner.component';

import './tensorflow.mileage.styles.scss';

class Tensorflow extends React.Component {    
  constructor() {
    super();

    this.state = {
      number: null,
      answer: 0
    }
  }

  componentDidMount() {
    prepareTheModel();
  }

  handleSubmit = async (event) => {
    await event.preventDefault();

    this.setState({ answer: makePrediction(this.state.number) });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
      return (
        <Suspense fallback={<Spinner />}>
          <div className='tensorflow'>
              <h1>Predict Miles Per Gallon From Horsepower</h1>
              <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" name="number" type="number" placeholder="Horsepower" value={this.state.number} onChange={this.handleChange} />
                <button className="button" type="submit">Enter</button>
              </form>
              <h1 className="prediction">Miles per Gallon: {this.state.answer}</h1>
          </div>
        </Suspense>
      )
  }
};

export default Tensorflow;