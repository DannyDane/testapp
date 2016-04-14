import React from 'react';
import { Component } from 'react';
import RectWide from './rect-wide';

export default class NavbarProgress extends Component {
	render() {
		return (
			<div>
			  <div className="navbar-bottom"> 
			    <ul>
 		          <li role="presentation"><a href="/progress/eq">EQ</a></li>
 		          <li role="presentation"><a href="#">Compression</a></li>
 			      <li role="presentation"><a href="#">Reverb</a></li>
 			 	</ul>
		      </div>
		      <RectWide /><RectWide /><RectWide /><RectWide />
		  	</div>
		)
	}
}