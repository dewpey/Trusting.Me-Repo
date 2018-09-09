import React, {Component} from 'react'

import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import Maker from '@makerdao/dai';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';

const maker = Maker.create('http', {
    url: 'https://sai-service.makerdao.com/node',
    provider: {
        type: 'HTTP', // 'INFURA', 'TEST'
        network: 'rinkeby',
        infuraApiKey: 'L0jbyLastjQYtdHMNXyh'
    },
    web3: {
        statusTimerDelay: 2000,
        transactionSettings: {
            gasPrice: 12000000000
        }
    }
});

class MakerDaoLoan extends Component {


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
export default connect(mapStateToProps, mapDispatchToProps)(MakerDaoLoan)
