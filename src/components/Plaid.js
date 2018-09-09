import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'

class Plaid extends Component {
    handleOnSuccess(token, metadata) {
      // send token to client server
    }
    handleOnExit() {
      // handle the case when your user exits Link
    }
    render() {
      return (
        <PlaidLink
          clientName="Trusting.me"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="edf22493e721471cd922137e004a59"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}>
          Open Link and connect your bank!
        </PlaidLink>
      )
    }
    
  }
  
  const mapStateToProps = (state, props) => {
    return {uport: state.App.uport}
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Plaid)
