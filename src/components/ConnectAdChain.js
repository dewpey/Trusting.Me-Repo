import React, {Component} from 'react'

import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';


class ConnectAdChain extends Component {


    constructor(props) {
        super(props)
    }


         // '50.00 DAI'
    


    render() {
       /*  const makerBrowser = Maker.create('browser');
        const makerTest = Maker.create('test');
        maker.authenticate(()=>{
            const cdp = maker.openCdp();
            cdp.ockEth(0.25);
        cdp.drawDai(50);
        const debt = cdp.getDebtValue();
        console.log(debt.toString); */
        return (
            <div>
            
                <InputGroup>
                <InputGroupAddon addonType="prepend">Ξ</InputGroupAddon>
                <Input type="string" name="address" id="address" placeholder="eth address" />
                </InputGroup>
                <InputGroup>
                <Input placeholder="Amount of DAI requested" type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
                
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ConnectAdChain)
