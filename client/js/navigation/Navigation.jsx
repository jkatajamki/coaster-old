import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid/';
import classNames from 'classnames/bind';
import stateToProps from '../utilities/stateToProps';
import logoImage from '../../img/coaster.png';
import navMenuItems from './nav-menu-items';

class Navigation extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.handleNavToggle = this.handleNavToggle.bind(this);
  }

  getCollapseNavClasses(menuItemTitle, routeTitle) {
    return classNames(
      'nav-link',
      { active: menuItemTitle === routeTitle }
    );
  }

  handleNavToggle() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const {
      props,
      handleNavToggle,
      state,
      getCollapseNavClasses,
    } = this;

    const { authentication: { isAuthenticated } } = this.props;
    const menuItems = navMenuItems.filter(item => (item.displayCondition ? item.displayCondition(isAuthenticated) : true));

    const currentRouteMenuItem = menuItems.find(item => item.url === props.location.pathname);
    const routeTitle = currentRouteMenuItem ? currentRouteMenuItem.title : '';

    return (
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img id="coasterLogo" src={logoImage} alt="Coaster logo" />
              <span className="navbar-brand-text">{routeTitle}</span>
            </Link>
            <Button className="navbar-toggler navbar-toggle" data-toggle="collapse" onClick={handleNavToggle}>
              <FontAwesomeIcon className="nav-toggle-icon" icon={state.expanded ? faAngleUp : faAngleDown} />
            </Button>

            <Collapse isOpen={state.expanded} className="navbar-collapse">
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
}

export default withRouter(connect(stateToProps('authentication'))(Navigation));
