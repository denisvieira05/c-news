
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as AuthenticationActions from '../modules/authentication/AuthenticationActions'
import { cNewsLogo } from '../assets/Images'

const GeneralHeader = (props) => {

  const { isAuthenticated, signOut, loggedUser, getLoggedUser} = props

  if(!loggedUser){
    getLoggedUser()
  }
  console.log('loggedUser',loggedUser)
  return (
    <div 
      style={styles.generalHeaderStyle}>
      <div style={{ flex: 0.5 }}> <Link to="/"><img src={cNewsLogo} style={styles.logoMain} /></Link></div>

      <div style={styles.navContainer}>
        {
          isAuthenticated ? (<Link to="/profile" style={styles.linkStyle}>My Profile</Link> ) : null }
        {
          isAuthenticated ? (
              <div>
                <label style={styles.linkStyle}>{loggedUser ? loggedUser.username : null}  -  </label>
                <label style={styles.linkStyle} onClick={() => signOut()}>Log Out</label>
              </div>
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
    color: '#FFB427',
  },
  navContainer: {
    display: 'flex',
    flex: 2, 
    justifyContent: 'space-around'
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