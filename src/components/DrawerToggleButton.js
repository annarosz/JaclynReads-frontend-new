import React from 'react';
import './DrawerToggleButton.css';

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span className="toggle-button_line" />
    <span className="toggle-button_line" />
    <span className="toggle-button_line" />
  </button>
);

export default drawerToggleButton;