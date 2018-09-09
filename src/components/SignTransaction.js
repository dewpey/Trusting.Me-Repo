// Frameworks
import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'

import SharesContract from '../utilities/SharesContract'
import waitForMined from '../utilities/waitForMined'
import checkAddressMNID from '../utilities/checkAddressMNID'
import getShares from '../utilities/getShares'

import styled from 'styled-components'
import {RadioGroup, RadioButton} from 'react-radio-buttons';

const SharesWrap = styled.section `
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit;
  }
`
const SharesArea = styled.div ``
const CurrentSharesArea = styled.div `
  margin-bottom: 20px;
`
const CurrentSharesNumber = styled.span `
  color: white;
`
const FormBuyshares = styled.form ``
const FormRow = styled.div ``
const BtnBuyShares = styled.button ``
const NextButton = styled.button `
  margin-top: 20px;
`
const SubText = styled.p `
  margin: 0 auto 3em auto;
  font-size: 18px;
`

class SignTransaction extends Component {

    constructor(props) {
        super(props)
        this.getCurrentShares = this
            .getCurrentShares
            .bind(this)
        this.buyShares = this
            .buyShares
            .bind(this)
        this.handleRadioChange = this
            .handleRadioChange
            .bind(this)
        this.state = {
            candidate1: '',
            party1: '',
            candidate2: '',
            party2: '',
            voteOnChange: 0
        }
  
        this.voteOnChange = this.voteOnChange.bind(this)
    }


    getCurrentShares() {
        // TODO: Dump this check once MNID is default behavior
        const addr = checkAddressMNID(this.props.uport.networkAddress)
        const actions = this.props.actions
        var candidatesList = [];
        var partiesList = [];
        var numberOfCandidates = 0
        SharesContract
            .candidatesCount
            .call((error, candidatesCount) => {
                numberOfCandidates = candidatesCount['c'][0]
                SharesContract
                    .candidates
                    .call(1, (error, candidates) => {
                        var candidate = candidates[1];
                        var party = candidates[3];
                        //   candidatesList[1] = candidates[1];   partiesList[i] = candidates[3];
                        this.setState({candidate1: candidate})
                        this.setState({party1: party})
                        //const sharesNumberDecoded = sharesNumber.toNumber()

                    })
                SharesContract
                    .candidates
                    .call(2, (error, candidates) => {
                        var candidate = candidates[1];
                        var party = candidates[3];
                        //   candidatesList[1] = candidates[1];   partiesList[i] = candidates[3];
                        this.setState({candidate2: candidate})
                        this.setState({party2: party})
                        //const sharesNumberDecoded = sharesNumber.toNumber()

                    })

            })
    }

    buyShares(e) {
        e.preventDefault()

        console.log('buyShares')

        let chosenCandidate = this.state.voteOnChange
        const addr = checkAddressMNID(this.props.uport.networkAddress)
        const actions = this.props.actions

        console.log({chosenCandidate, addr, actions})
/**
        this
            .props
            .actions
            .buySharesREQUEST(sharesNumber)
**/
        SharesContract.vote(chosenCandidate, (error, txHash) => {
            console.log('updateShares')
            if (error) {
                this
                    .props
                    .actions
                    .buySharesERROR(error)
            }
            waitForMined(addr, txHash, {
                blockNumber: null
            }, actions, () => {
                this
                    .props
                    .actions
                    .buySharesPENDING()
            }, (total) => {
                console.log('waitForMined complete')
                this
                    .props
                    .actions
                    .buySharesSUCCESS(txHash, total)
            })
        })
    }

    handleInputChange(event) {
        this
            .props
            .actions
            .updatesharesInput(event.target.value)
        console.log(this.props)
    }

    handleRadioChange(event) {
        this
            .props
            .actions
            .handleRadioChange(event.target.value)
        console.log(this.props)
    }

    componentDidMount() {
        // Populate existing shares
        console.log(this.getCurrentShares())
    }

    voteOnChange(value) {
      this.setState({
        voteOnChange: value
      })
        console.log(this.state.voteOnChange)
    }

    render() {
        return (
            <div>
                <h1>Wyoming Gubernatorial Race</h1>
                <RadioGroup
                    onChange={this.voteOnChange}
                    value={this.props.currentVote}
                    horizontal>
                    <RadioButton value="1">
                        {this.state.candidate1}
                        | {this.state.party1}
                    </RadioButton>
                    <RadioButton value="2">
                        {this.state.candidate2}
                        | {this.state.party2}
                    </RadioButton>
                    <RadioButton value="3">
                        Our Savior Joe Lubin
                    </RadioButton>
                </RadioGroup>
                <NextButton onClick={this.buyShares}>Next</NextButton>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        uport: state.App.uport,
        sharesInput: state.App.sharesInput,
        gettingShares: state.App.gettingShares,
        confirmingInProgress: state.App.confirmingInProgress,
        sharesTotal: state.App.sharesTotal,
        buyingInProgress: state.App.buyingInProgress,
        tx: state.App.tx,
        error: state.App.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignTransaction)
