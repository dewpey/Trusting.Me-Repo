// Frameworks
import React, {Component} from 'react'
import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import styled from 'styled-components'
import { Button, Form, FormGroup, Label, Input, FormText, Col} from 'reactstrap'

const CredentialsWrap = styled.section `
  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    position: inherit;
  }
`
const CredentialsArea = styled.section `
  text-align: center;
`
const CredsTable = styled.table `
  margin: auto;
  text-align: left;
`

const CredsLabel = styled.label `
  position: relative;
  top: 10px;
`

const CredsButton = styled.button `
  margin-top: 20px;
`

const NextButton = styled.button `
  margin-top: 20px;
`

const SubText = styled.p `
  margin: 20px auto 3em auto;
  font-size: 18px;
`

const RELATIONSHIPCLAIM = 'User'
const CERTIFICATECLAIM = 'uPort Demo'



class CollectCredentials extends Component {

   
    constructor(props) {
        super(props)
        this.credentialsbtnClickA = this
            .credentialsbtnClickA
            .bind(this)
        this.credentialsbtnClickB = this
            .credentialsbtnClickB
            .bind(this)
        this.credentialsbtnClickC = this
            .credentialsbtnClickC
            .bind(this)
        this.credentialsbtnClickD = this
            .credentialsbtnClickD
            .bind(this)
        this.state = {
            name: this.props.uport.name,
            address: '',
            party: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
    }

    
    
    handleChange(event) {
        // check it out: we get the evt.target.name (which will be either "email" or
        // "password") and use it to target the key on our `state` object with the same
        // name, using bracket syntax
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }

    credentialsbtnClickA() {
        uport.attestCredentials({
            sub: this.props.uport.address,
            claim: {
                name: this.props.uport.name
            },
            exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            uriHandler: (log) => {
                console.log(log)
            }
        })
    }
    credentialsbtnClickB() {
        uport.attestCredentials({
            sub: this.props.uport.address,
            claim: {
                Relationship: RELATIONSHIPCLAIM
            },
            exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            uriHandler: (log) => {
                console.log(log)
            }
        })
    }
    credentialsbtnClickC() {
        uport.attestCredentials({
            sub: this.props.uport.address,
            claim: {
                Certificate: CERTIFICATECLAIM
            },
            exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            uriHandler: (log) => {
                console.log(log)
            }
        })
    }

    credentialsbtnClickD() {
        let voter = uport.attestCredentials({
            sub: this.props.uport.address,
            claim: {
                voterRegistration: {
                    "name": this.state.name,
                    "address": this.state.address,
                    "party": this.state.party
                }
            },
            exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
            uriHandler: (log) => {
                console.log(log)
            }

        })
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleOnSuccess(token, metadata) {
        console.log(token + " " + metadata)
      }
      handleOnExit(error, metadata) {
        console.log('link: user exited');
        console.log(error, metadata);
      }
      handleOnLoad() {
        console.log('link: loaded');
      }
      handleOnEvent(eventname, metadata) {
        console.log('link: user event', eventname, metadata);
      }
    render(props) {
        
        return (
            <CredentialsWrap>
                <Form>
        <FormGroup row>
          <Label for="name" sm={2}>Name</Label>
          <Col sm={5}>
            <Input type="name" name="name" id="name" placeholder="" value={this.props.uport.name} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="address" sm={2}>Address</Label>
          <Col sm={5}>
            <Input type="address" name="address" id="address" placeholder="" value={this.state.address} onChange={this.handleChange} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="partySelect" sm={2}>Select party</Label>
          <Col sm={5}>
          <Input type="select" name="party" id="party">
            <option>Democrat</option>
            <option>Republican</option>
            <option>Independent</option>
            <option>Constitutional</option>
            <option>Green</option>
          </Input>
          </Col>
        </FormGroup>
        <CredsButton onClick={this.credentialsbtnClickD}>Submit</CredsButton>
        </Form>
        </CredentialsWrap>
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
export default connect(mapStateToProps, mapDispatchToProps)(CollectCredentials)
