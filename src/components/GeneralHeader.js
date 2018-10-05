
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as AuthenticationActions from '../modules/authentication/AuthenticationActions'
import { cNewsLogo } from '../assets/Images'
import Colors from '../assets/Colors'
import injectSheet from 'react-jss'
import { DEFAULT_INTERESTS }from '../modules/profile/ProfileTypes'

const GeneralHeader = (props) => {

  const { isAuthenticated, signOut, loggedUser, getLoggedUser, classes} = props

  if(!loggedUser){
    getLoggedUser()
  }

  const defaultInterests = Object.values(DEFAULT_INTERESTS)
  console.log(defaultInterests)
  return (
    <div 
      className={classes.generalHeaderStyle}>
      <div style={{ flex: 0.5 }}> 
        <Link to="/"><img src={cNewsLogo} className={classes.logoMain} alt="Main Logo"/></Link>
      </div>

      <div className={classes.navContainer}>
        { defaultInterests.map((item) => (
            <label className={classes.navItem}>{item.text}</label>
          ))
        }
      </div>

      {
        isAuthenticated ? (<Link to="/profile" className={classes.linkStyle}>{loggedUser ? loggedUser.username : null}</Link>) : null}
      {
        isAuthenticated ? (
          null
        ) : (
            <Link to="/auth" className={classes.linkStyle}>Log In</Link>
          )
      }     
    </div>
  )
}

const styles = {
  generalHeaderStyle: {
    display: 'flex', 
    background: 'white',
    justifyContent: 'space-around',
    paddingLeft: '8.188em', 
    paddingRight: '8.188em', 
    borderBottom: '1px solid #ccc',
    alignItems: 'center',
  },
  logoMain: {
    width: '3em',
    height: '3em',
    alignSelf: 'center'
  },
  linkStyle: {
    color: Colors.blue,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '0.875em'
  },
  navContainer: {
    display: 'flex',
    flex: 2, 
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: '3.375em', 
  },
  navItem: {
    color: Colors.gray,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: '0.875em',
    marginRight: '2em'
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  loggedUser: state.authentication.loggedUser,
})

const mapDispatchToProps = {
  getLoggedUser: AuthenticationActions.getLoggedUser,
}

const StyledGeneralHeader = injectSheet(styles)(GeneralHeader)

export default connect(mapStateToProps, mapDispatchToProps)(StyledGeneralHeader)