import React from 'react';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';


import App from './components/app';

import NavbarProgress from './components/navbar-progress';
import NavbarExercises from './components/navbar-exercises';
import NavbarStats from './components/navbar-stats';
import NavbarRewards from './components/navbar-rewards';
import NavbarProfile from './components/navbar-profile';

import Progress from './components/progress';


render((
	<Router history={hashHistory}>
    	<Route path="/" component={App} >
    	   <Route path="/progress">
    	      <IndexRoute component={NavbarProgress} />
    	    </Route>
    	    <Route path="/exercises" component={NavbarExercises}>
    	      <Route component={Progress} />
    	    </Route>
    	    <Route path="/stats">
    	      <IndexRoute component={NavbarStats} />
    	    </Route>
    	    <Route path="/rewards">
    	      <IndexRoute component={NavbarRewards} />
    	    </Route>
    	    <Route path="/profile">
    	      <IndexRoute component={NavbarProfile} />
    	    </Route>
      	</Route>
	</Router>

	), document.querySelector('.container'));
