import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as AuthenticationActions from "../../authentication/AuthenticationActions";
import { cNewsLogo, menuIcon } from "../../../assets/Images";
import Colors from "../../../assets/Colors";
import Strings from "../../../assets/Strings";
import injectSheet from "react-jss";
import { DEFAULT_INTERESTS } from "../../profile/ProfileTypes";
import SideMenu from "../../../components/SideMenu";
import NavList from "../../../components/NavList";

class GeneralHeader extends PureComponent {
  state = {
    showSideMenu: false
  };

  toogleSideMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    const { isAuthenticated, loggedUser, getLoggedUser, classes } = this.props;

    if (!loggedUser) {
      getLoggedUser();
    }

    const defaultInterests = Object.values(DEFAULT_INTERESTS);

    return (
      <div className={classes.mainHeaderContainer}>
        <div className={classes.generalHeaderStyle}>
          <SideMenu
            show={this.state.showSideMenu}
            items={defaultInterests}
            onClickItem={index => this.toogleSideMenu()}
          />

          <div className={classes.sideMenuIconContainer}>
            <img
              src={menuIcon}
              className={classes.sideMenuIcon}
              alt="Side Menu Icon"
              onClick={() => this.toogleSideMenu()}
            />
          </div>

          <div className={classes.logoMainContainer}>
            <Link to="/">
              <img
                src={cNewsLogo}
                className={classes.logoMain}
                alt="Main Logo"
              />
            </Link>
          </div>

          <div className={classes.generalNavContainer}>
            <NavList
              items={defaultInterests}
            />

            {isAuthenticated ? (
              <Link to="/profile" className={classes.linkStyle}>
                {loggedUser && loggedUser.username}
              </Link>
            ) : (
              <Link to="/auth" className={classes.linkStyle}>
                {Strings.signIn}
              </Link>
            )}
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
    generalNavContainer: {
      display: "flex !important"
    }
  },
  generalNavContainer: {
    display: "none"
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
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  loggedUser: state.authentication.loggedUser
});

const mapDispatchToProps = {
  getLoggedUser: AuthenticationActions.getLoggedUser
};

const StyledGeneralHeader = injectSheet(styles)(GeneralHeader);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledGeneralHeader);
