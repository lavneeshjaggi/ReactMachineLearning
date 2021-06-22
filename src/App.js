import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.jsx';
import Spinner from './components/spinner/spinner.component.jsx';
import TensorflowMileage from './pages/tensorflow mileage/tensorflow.mileage.jsx';
import TensorflowHandwriting from './pages/tensorflow digit recognition/tensorflow.digitrecognition.jsx';
import TensorflowBaseball from './pages/tensorflow baseball/tensorflow.baseball.jsx';

import './App.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
        <Route path="/mileage" component={TensorflowMileage} />
        <Route path="/handwriting" component={TensorflowHandwriting} />
        <Route path="/baseball" component={TensorflowBaseball} />
      </Suspense>
    </Switch>
  </div>
);

export default App;
