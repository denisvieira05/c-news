import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom'
import Home from '../home/Home';
import Authentication from '../authentication/Authentication'; 
import Profile from '../profile/Profile'; 
import GeneralHeader from '../../components/GeneralHeader'

const MainApp = ({ isAuthenticated }) => {
    return (
        <div>
            <GeneralHeader />
            <Route exact path="/auth" component={Authentication} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
        </div>
    )
};

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(MainApp));
