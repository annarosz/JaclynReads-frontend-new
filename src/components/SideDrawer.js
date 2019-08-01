import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';
import Jicon from '../Jicon.png';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <div className="logo"><Link to="/home"><img src={Jicon} alt="logo"></img></Link></div>
      <div className="linksMobile">
        <Link to="/aboutme">About me</Link>
        <Link to="/sortbygenre">Reviews by Genre</Link>
        <Link to="/sortbyyear">Reviews by year</Link>
        <Link to="/toppicks">Top Picks</Link>
        <Link to="/subscribe">Subscribe</Link>
      </div>
  </nav>
  );
};

export default sideDrawer;