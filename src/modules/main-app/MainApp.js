import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "../home/Home";
import Authentication from "../authentication/Authentication";
import Profile from "../profile/Profile";
import GeneralHeader from "../../components/GeneralHeader";
import PrivateRoute from "../../components/PrivateRoute";

const MainApp = ({ isAuthenticated }) => {
  return (
    <div>
      <GeneralHeader />
      <div style={{ marginTop: "3.313em" }}>
        <Route exact path="/auth" component={Authentication} />
        <Route exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/profile"
          component={Profile}
          isAuthenticated={isAuthenticated}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(MainApp)
);
