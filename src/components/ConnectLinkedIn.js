import React, {Component} from 'react'

import {uport} from '../utilities/uportSetup'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import LinkedinSDK from 'react-linkedin-sdk'

class ConnectLinkedIn extends Component {
    constructor(props) {
        super(props)
        self = this;
    }
    responseLinkedin(response) {
       
      }
    render() {

        return (<LinkedinSDK
            clientId="86onvqz489w1fd"
            callBack={(response)=>{
                console.log(response)
                console.log(this.props)
                uport.attestCredentials({
                    sub: this.props.uport.address,
                    claim: {
                        LinkedIn: {
                            name: response["formattedName"],
                            connections: response["numConnections"],
                            location: response["location"]["name"],
                        }
                    },
                    exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
                    uriHandler: (log) => {
                        console.log(log)
                    }
        
                })
            }}
            fields=":(formatted-name,location,id,num-connections)"
            className={'className'}
            loginButtonText={'Login with Linkedin'}
            logoutButtonText={'Logout from Linkedin'}
            buttonType={'button'}/>)
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
export default connect(mapStateToProps, mapDispatchToProps)(ConnectLinkedIn)
