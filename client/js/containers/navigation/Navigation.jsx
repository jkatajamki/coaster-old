import React from 'react';
import getMenuItems from '../../items/getMenuItems';
import { withRouter } from 'react-router-dom';
import { Button, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid/';
import classNames from 'classnames/bind';
import stateToProps from '../../utilities/stateToProps';
import { connect } from 'react-redux';
import logoImage from '../../../img/coaster.png';

const getResetNavState = () => ({
  expanded: false,
});

class Navigation extends React.Component {
  state = getResetNavState();

  handleNavToggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  getCollapseNavClasses = (menuItemTitle, routeTitle) => classNames(
    'nav-link',
    { 'active': menuItemTitle === routeTitle, }
  );

  render() {
    const {
      props, handleNavToggle, state, getCollapseNavClasses
    } = this;

    const { isAuthenticated, currentUser } = this.props.authentication;
    const username = currentUser.username;
    const menuItems = getMenuItems().filter(item => item.displayCondition ? item.displayCondition(isAuthenticated) : true);

    const currentRouteMenuItem = menuItems.find(item => item.url === props.location.pathname);
    const routeTitle = currentRouteMenuItem ? currentRouteMenuItem.title : '';

    return(
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img id="coasterLogo" src={logoImage} alt="Coaster logo" />
              <span className="navbar-brand-text">{routeTitle}</span>
            </a>
            <Button className="navbar-toggler navbar-toggle" data-toggle="collapse" onClick={handleNavToggle}>
              <FontAwesomeIcon className="nav-toggle-icon" icon={state.expanded ? faAngleUp : faAngleDown} />
            </Button>

            <Collapse isOpen={state.expanded} className="navbar-collapse">
              <ul className="nav navbar-nav">
                {menuItems.map(menuItem =>
                  <li key={menuItem.id} className={getCollapseNavClasses(menuItem.title, routeTitle)}>
                    <a href={menuItem.url}>
                      {menuItem.title}
                    </a>
                  </li>
                )}
              </ul>
            </Collapse>
          </div>
        </div>
      </header>
    );
  };
}

export default withRouter(connect(stateToProps('authentication'))(Navigation));
