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
    this.MakerDaoLoan = this.MakerDaoLoan.bind(this)
    this.ConnectLinkedIn = this.ConnectLinkedIn.bind(this)
    this.ConnectPlaid = this.ConnectPlaid.bind(this)
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

  MakerDaoLoan () {
    uport.requestCredentials(
      { requested: ['name','country','avatar'],
        notifications: true }
    ).then((credentials) => {
        console.log({credentials})
        this.props.actions.MakerDaoLoan(credentials)
    })
  }

  ConnectLinkedIn () {
    uport.requestCredentials(
      { requested: ['name','country','avatar'],
        notifications: true }
    ).then((credentials) => {
        console.log({credentials})
        this.props.actions.ConnectLinkedIn(credentials)
    })
  }

  ConnectPlaid () {
    uport.requestCredentials(
      { requested: ['name','country','avatar'],
        notifications: true }
    ).then((credentials) => {
        console.log({credentials})
        this.props.actions.ConnectPlaid(credentials)
    })
  }
  

  render () {
    return (
      <div margin>
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
        <h1>Buck a loan.</h1>
        <SubText>Get a loan with your identity, Plaid, and MakerDao</SubText>
        <ConnectUport
          onClick={this.ConnectPlaid}>
          Plaid
        </ConnectUport>
        <br/>
        <ConnectUportVote
          onClick={this.MakerDaoLoan}>
          Loan
        </ConnectUportVote>
        <h1>Buck the event.</h1>
        <SubText>Verify yourself as not a bot and get event tickets with Decent</SubText>
        <ConnectUport
          onClick={this.ConnectLinkedIn}>
          LinkedIn
        </ConnectUport>
        <br/>
        <ConnectUportVote
          onClick={this.connectUportVote}>
          Get a ticket
        </ConnectUportVote>
      </WelcomeWrap>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    connectUportVote: state.App.connectUportVote,
    MakerDaoLoan: state.App.MakerDaoLoan,
    ConnectLinkedIn: state.App.ConnectLinkedIn,
    ConnectPlaid: state.App.ConnectPlaid,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
