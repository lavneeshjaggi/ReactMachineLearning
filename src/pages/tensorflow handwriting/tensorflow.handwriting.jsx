import React from 'react';

import { prepareTheModel } from './tensorflow.handwriting.functions';
import Spinner from '../../components/spinner/spinner.component';

import './tensorflow.handwriting.styles.scss';

class TensorflowHandwriting extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    await prepareTheModel();

    this.setState({ loading: false });
  }

  render() {
    if(this.state.loading) {
      return <Spinner />
    }

    return (
        <div className="tensorflowhandwriting">
            <h1>Tensorflow Handwriting</h1>
        </div>
    )
  }
}

export default TensorflowHandwriting;