import React from 'react';
import { Component } from 'react';

export default class NavbarExercises extends Component {
	render() {
		return (
			<div>
			<div className="navbar-bottom"> 
			    <ul>
 		          <li role="presentation"><a href="#">ALL</a></li>
 		          <li role="presentation"><a href="#">EQ</a></li>
 		           <li role="presentation"><a href="#">COMPRESSION</a></li>
 			      <li role="presentation"><a href="#">REVERB</a></li>
 			 	</ul>
		  	</div>
		  	{this.props.children}
		  	</div>
		)
	}
}