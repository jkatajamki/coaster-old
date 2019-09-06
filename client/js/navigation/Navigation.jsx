import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid/';
import classNames from 'classnames/bind';
import stateToProps from '../utilities/stateToProps';
import logoImage from '../../img/coaster.png';
import navMenuItems from './nav-menu-items';

const Navigation = ({ location, authentication: { isAuthenticated } }) => {
  const [navState, setNavState] = useState({
    expanded: false,
  });

  const getCollapseNavClasses = (menuItemTitle, routeTitle) => classNames(
    'nav-link',
    { active: menuItemTitle === routeTitle },
  );

  const toggleNav = () => setNavState({
    expanded: !navState.expanded
  });

  const menuItems = navMenuItems.filter(item => (item.displayCondition ? item.displayCondition(isAuthenticated) : true));
  const currentRouteMenuItem = menuItems.find(item => item.url === location.pathname);
  const routeTitle = currentRouteMenuItem ? currentRouteMenuItem.title : '';

  return (
    <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img id="coasterLogo" src={logoImage} alt="Coaster logo" />
            <span className="navbar-brand-text">{routeTitle}</span>
          </Link>
          <Button className="navbar-toggler navbar-toggle" data-toggle="collapse" onClick={toggleNav}>
            <FontAwesomeIcon className="nav-toggle-icon" icon={navState.expanded ? faAngleUp : faAngleDown} />
          </Button>

          <Collapse isOpen={navState.expanded} className="navbar-collapse">
            <ul className="nav navbar-nav">
              {menuItems.map(menuItem => (
                <li
                  key={menuItem.id}
                  className={getCollapseNavClasses(menuItem.title, routeTitle)}
                >
                  <Link to={menuItem.url} className="nav-link">
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </header>
  );
}

export default withRouter(connect(stateToProps('authentication'))(Navigation));
