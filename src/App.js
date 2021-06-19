import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.jsx';
import Spinner from './components/spinner/spinner.component.jsx';
import TensorflowMileage from './pages/tensorflow mileage/tensorflow.mileage.jsx';

import './App.scss';

const App = () => (
  <div className="App">
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path="/" component={Homepage} />
        <Route path="/mileage" component={TensorflowMileage} />
      </Suspense>
    </Switch>
  </div>
);

export default App;
