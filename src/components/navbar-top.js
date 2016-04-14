import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router'


export default class NavbarTop extends Component {
   render() {
   	  return (
   	    <div className="navbar-top">
         
             <ul>
 		       <li role="presentation" activeClassName="active"><Link to="/progress" activeClassName="active">Progress</Link></li>
 		       <li role="presentation"><Link to="/exercises" activeClassName="active">Exercises</Link></li>
 			   <li role="presentation"><Link to="/stats" activeClassName="active">Stats</Link></li>
 			   <li role="presentation"><Link to="/rewards" activeClassName="active">Rewards</Link></li>
 			   <li role="presentation"><Link to="/profile" activeClassName="active">Profile</Link></li>
		     </ul>
		  

   	    </div>
   	  )
   }

}