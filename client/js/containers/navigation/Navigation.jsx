import React from 'react';
import getMenuItems from '../../items/getMenuItems';
import bindState from '../../utilities/bindState';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCaretSquareDown, faCaretSquareUp } from '@fortawesome/fontawesome-free-solid/';

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

  render() {
    const { props, handleNavToggle, state } = this;
    const menuItems = getMenuItems();
    const routeTitle = menuItems.find(item => item.url === props.location.pathname).title || '';

    return(
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <span className="navbar-brand-text">{routeTitle}</span>
            </a>
            <Button className="navbar-toggler" data-toggle="collapse"
                    data-target="#navbarHeader" aria-controls="navbarHeader"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={handleNavToggle}
            >
              <FontAwesomeIcon className="nav-toggle-icon" icon={state.expanded ? faCaretSquareUp : faCaretSquareDown}/>
            </Button>

            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                {menuItems.map(menuItem =>
                  <li key={menuItem.id}>
                    <a href={menuItem.url}>
                      {menuItem.title}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  };
}

export default withRouter(Navigation);
