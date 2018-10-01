import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, withRouter } from 'react-router-dom'
import Home from '../home/Home';
import Authentication from '../authentication/Authentication'; 

const MainApp = ({ isAuthenticated }) => {
    return (
        <div>
            <Route exact path="/auth" component={Authentication} />
            <Route exact path="/" component={Home} />
        </div>
    )
};

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(MainApp));
