import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'

// createPublicToken(String, Function)

class ConnectPlaid extends Component {
    constructor (props) {
        super(props)
        this.state = {
            balance: 0,
        }
    }

    handleOnSuccess(token, metadata) {
        //using placeholder because plaid is really complex to work with.
        this.setState({balance: Math.floor(Math.random() * 10000) + 1000})
    }
        
    handleOnExit() {
      // handle the case when your user exits Link
    }
    render() {
        
      return (
        <PlaidLink
          clientName="Trusting.me"
          env="sandbox"
          product={["auth"]}
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
export default connect(mapStateToProps, mapDispatchToProps)(ConnectPlaid)
