// Frameworks
import React, { Component } from 'react'
import { Route, Link, Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from './actions/AppActions'

import styled from 'styled-components'

// Components
import AppNavbar from './components/AppNavbar'
import Welcome from './components/Welcome'
import SignTransaction from './components/SignTransaction'
import CollectCredentials from './components/CollectCredentials'
import RegisterYourApp from './components/RegisterYourApp'
import LogOut from './components/LogOut'
import MakerDaoLoan from './components/MakerDaoLoan' 
import ConnectLinkedIn from './components/ConnectLinkedIn'
import ConnectPlaid from './components/ConnectPlaid'
import ConnectAdChain from './components/ConnectAdChain'
import ConnectDecent from './components/ConnectDecent'
const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const AppBody = styled.div`
  flex: 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 100%;
  padding: 20px;
`

class App extends Component {
  render () {
    return (
      <AppWrap>
        <AppNavbar />
        <AppBody>
          {
            !this.props.uport &&
            !this.props.signTransactionPage
              ? <Welcome />
              : null
          }
          {
            this.props.collectCredentialsPage &&
            !this.props.registerYourAppPage
              ? <CollectCredentials />
              : null
          }
          {
            this.props.ConnectPlaid === true
            ? <ConnectPlaid />
              : null
          }
          {
            this.props.MakerDaoLoan === true
            ? <MakerDaoLoan />
              : null
          }
          {
            this.props.ConnectLinkedIn === true
            ? <ConnectLinkedIn />
              : null
          }
          {
            this.props.ConnectPlaid === true
            ? <ConnectPlaid />
              : null
          }
          {
            this.props.signTransactionPage === true &&
            !this.props.collectCredentialsPage
              ? <SignTransaction />
              : null
          }
          {
            this.props.registerYourAppPage &&
            !this.props.logOutPage
              ? <RegisterYourApp />
              : null
          }
          {
            this.props.MakerDaoLoan
              ? <MakerDaoLoan />
              : null
          }
          {
            this.props.ConnectAdChain
              ? <ConnectAdChain />
              : null
          }
          {
            this.props.ConnectDecent
              ? <ConnectDecent />
              : null
          }
          {
            this.props.logOutPage
              ? <LogOut />
              : null
          }        
          </AppBody>
      </AppWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    signTransactionPage: state.App.signTransactionPage,
    collectCredentialsPage: state.App.collectCredentialsPage,
    registerYourAppPage: state.App.registerYourAppPage,
    logOutPage: state.App.logOutPage,
    MakerDaoLoan: state.App.MakerDaoLoan,
    ConnectLinkedIn: state.App.ConnectLinkedIn,
    ConnectPlaid: state.App.ConnectPlaid,
    ConnectDecent: state.App.ConnectDecent,
    ConnectAdChain: state.App.ConnectAdChain,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
