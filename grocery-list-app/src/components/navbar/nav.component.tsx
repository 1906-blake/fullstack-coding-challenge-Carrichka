import React from 'react';
import { Link } from 'react-router-dom';



export class Navbar extends React.Component {
   render() {
       return (
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link to="/" className="navbar-brand">Grocery List</Link>
               <div className="navbar-nav">
                   <Link to="/create-list" className="nav-item nav-link active">Create a list</Link>
                   <Link to="/view-list" className="nav-item nav-link">View a list</Link>
               </div>
           </nav>
       )
   }
}