import React from 'react';
import getMenuItems from '../../items/getMenuItems';
import bindState from '../../utilities/bindState';
import { withRouter } from 'react-router-dom';
import { Button, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/fontawesome-free-solid/';
import classNames from 'classnames/bind';

const getResetNavState = () => ({
  expanded: false,
});

class Navigation extends React.Component {
  state = getResetNavState();

  bind = bindState(this);

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
    const menuItems = getMenuItems();
    const routeTitle = menuItems.find(item => item.url === props.location.pathname).title || '';

    return(
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <span className="navbar-brand-text">{routeTitle}</span>
            </a>
            <Button className="navbar-toggler navbar-toggle" data-toggle="collapse" onClick={handleNavToggle}>
              <FontAwesomeIcon className="nav-toggle-icon" icon={state.expanded ? faAngleUp : faAngleDown}/>
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

export default withRouter(Navigation);
