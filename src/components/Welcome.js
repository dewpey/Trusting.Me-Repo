// Frameworks
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import styled from 'styled-components'
import { uport } from '../utilities/uportSetup'

const WelcomeWrap = styled.section``
const ConnectUport = styled.button``
const ConnectUportVote = styled.button``
const SubText = styled.p`
  margin: 0 auto 3em auto;
  font-size: 18px;
`

class Welcome extends Component {

  constructor (props) {
    super(props)
    this.connectUport = this.connectUport.bind(this)
    this.connectUportVote = this.connectUportVote.bind(this)
  }

  connectUport () {
    uport.requestCredentials(
      { requested: ['name','country','avatar'],
        notifications: true }
    ).then((credentials) => {
        console.log({credentials})
        this.props.actions.connectUport(credentials)
    })
  }

  connectUportVote () {
    uport.requestCredentials(
      { requested: ['name','country','avatar'],
        notifications: true }
    ).then((credentials) => {
        console.log({credentials})
        this.props.actions.connectUportVote(credentials)
    })
  }


  render () {
    return (
      <WelcomeWrap>
        <h1>Buck the vote.</h1>
        <SubText>Voter registration and voting system on Ethereum.</SubText>
        <ConnectUport
          onClick={this.connectUport}>
          Vote
        </ConnectUport>
        <br/>
        <ConnectUportVote
          onClick={this.connectUportVote}>
          Voter registration
        </ConnectUportVote>
      </WelcomeWrap>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    connectUportVote: state.App.connectUportVote,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
