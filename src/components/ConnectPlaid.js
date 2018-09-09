import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
//import * as plaid from 'plaid'
//const plaidClient = new plaid.Client('5b936905448de50011a249ae', 'c5c96d083dd6b6a803ed8971e4fe08', 'edf22493e721471cd922137e004a59', plaid.environments.sandbox, {version: '2018-05-22'});

// createPublicToken(String, Function)

class ConnectPlaid extends Component {
    
    handleOnSuccess(token, metadata) {
        /* plaidClient.createPublicToken(token, (callback)=>{
            console.log(callback);
            plaidClient.exchangePublicToken(callback, (callback1)=>{
                plaidClient.getBalance(callback1, (callback2)=>{
                    console.log(callback2)
                });
            });
        }); */
            
        
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
