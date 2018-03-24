import React from 'react';
import menuItems from '../items/menu-items';

const Navigation = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <a href="#" className="home-banner">
          </a>
        </div>

        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {menuItems().map(menuItem =>
              <li key={menuItem.id}>
                <a href={menuItem.url}>
                  {menuItem.title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
