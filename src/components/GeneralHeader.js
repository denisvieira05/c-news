
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as AuthenticationActions from '../modules/authentication/AuthenticationActions'
import { cNewsLogo, menuIcon } from "../assets/Images";
import Colors from '../assets/Colors'
import Strings from '../assets/Strings'
import injectSheet from 'react-jss'
import { DEFAULT_INTERESTS } from '../modules/profile/ProfileTypes'
import SideMenu from './SideMenu'

class GeneralHeader extends PureComponent {

  state = {
    showSideMenu: false,
  };

  toogleSideMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {

    const { isAuthenticated, loggedUser, getLoggedUser, classes } = this.props

    if (!loggedUser) {
      getLoggedUser()
    }

    const defaultInterests = Object.values(DEFAULT_INTERESTS)

    return (
    <div className={classes.mainHeaderContainer}>
      <div className={classes.generalHeaderStyle}>

        <SideMenu 
          show={this.state.showSideMenu} 
          items={defaultInterests}
          onClickItem={(index) => this.toogleSideMenu()}
        />

        <div className={classes.sideMenuIconContainer}>
          <img src={menuIcon} className={classes.sideMenuIcon} alt="Side Menu Icon" onClick={() => this.toogleSideMenu()} />
        </div>

        <div className={classes.logoMainContainer}>
          <Link to="/">
            <img src={cNewsLogo} className={classes.logoMain} alt="Main Logo" />
          </Link>
        </div>

        <div className={classes.navContainer}>
          {defaultInterests.map((item, index) => (
            <label key={index} className={classes.navItem}>
              {item.text}
            </label>
          ))}

          {isAuthenticated ? <Link to="/profile" className={classes.linkStyle}>
            {loggedUser ? loggedUser.username : null}
          </Link> : null}
          {isAuthenticated ? null : <Link to="/auth" className={classes.linkStyle}>
            Log In
            </Link>}
        </div>
        
      </div>
    </div>
    );
  }

}

const styles = {
  "@media screen and (min-width: 750px)": {
    sideMenuIconContainer: {
      display: "none"
    },
    navContainer: {
      display: "flex !important"
    }
  },
  mainHeaderContainer: {
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1
  },
  sideMenuIconContainer: {
    position: "absolute",
    left: "2em"
  },
  sideMenuIcon: {
    width: "1.500em",
    height: "1.188em"
  },
  generalHeaderStyle: {
    display: "flex",
    background: "white",
    justifyContent: "space-around",
    paddingLeft: "8.188em",
    paddingRight: "8.188em",
    borderBottom: "1px solid #ccc",
    alignItems: "center"
  },
  logoMain: {
    width: "3em",
    height: "3em",
    alignSelf: "center"
  },
  linkStyle: {
    color: Colors.blue,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.875em"
  },
  navContainer: {
    display: "none",
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "3.375em"
  },
  navItem: {
    color: Colors.gray,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.875em",
    marginRight: "2em"
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  loggedUser: state.authentication.loggedUser,
})

const mapDispatchToProps = {
  getLoggedUser: AuthenticationActions.getLoggedUser,
}

const StyledGeneralHeader = injectSheet(styles)(GeneralHeader)

export default connect(mapStateToProps, mapDispatchToProps)(StyledGeneralHeader)