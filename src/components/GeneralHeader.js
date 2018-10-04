
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as AuthenticationActions from '../modules/authentication/AuthenticationActions'
import { cNewsLogo } from '../assets/Images'
import Colors from '../assets/Colors'

const GeneralHeader = (props) => {

  const { isAuthenticated, signOut, loggedUser, getLoggedUser} = props

  if(!loggedUser){
    getLoggedUser()
  }

  return (
    <div 
      style={styles.generalHeaderStyle}>
      <div style={{ flex: 0.5 }}> <Link to="/"><img src={cNewsLogo} style={styles.logoMain} /></Link></div>

      <div style={styles.navContainer}>
        <label style={styles.navItem}>Sports</label>
        <label style={styles.navItem}>Politics</label>
        <label style={styles.navItem}>Business</label>
        {
          isAuthenticated ? (<Link to="/profile" style={styles.linkStyle}>{loggedUser ? loggedUser.username : null}</Link> ) : null }
        {
          isAuthenticated ? (
              <label style={styles.linkStyle} onClick={() => signOut()}>Log Out</label>
          ) : (
              <Link to="/auth" style={styles.linkStyle}>Log In</Link>
            )
        }     
      </div>
    </div>
  )
}

const styles = {
  generalHeaderStyle: {
    display: 'flex', 
    background: 'white',
    justifyContent: 'space-around',
    paddingLeft: '5em', 
    borderBottom: '1px solid #ccc'
  },
  logoMain: {
    width: '3em',
    height: '3em',
    alignSelf: 'center'
  },
  linkStyle: {
    color: Colors.blue,
  },
  navContainer: {
    display: 'flex',
    flex: 2, 
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navItem: {
    color: Colors.gray,
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  loggedUser: state.authentication.loggedUser,
})

const mapDispatchToProps = {
  signOut: AuthenticationActions.signOut,
  getLoggedUser: AuthenticationActions.getLoggedUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralHeader)