import React, {Component} from 'react'

import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Label } from 'reactstrap';

/* import * as dcorejs from 'dcorejs';

const privateKey = '5JnV8u1qP6J1mN9zYbcLDmcjtijJbFYMXFVURA6nqMTJcLKQkRx' 
const config = {
    dcoreNetworkWSPaths: ['ws://hackathon.decent.ch:8090', 'wss://hackathon2.decent.ch:8090'],
    chainId: '9c54faed15d4089d3546ac5eb0f1392434a970be15f1452ce1e7764f70f02936'
}; */
class ConnectDecent extends Component {


    constructor(props) {
        super(props)
    }


         // '50.00 DAI'
    


    render() {
/* dcorejs.initialize(config);
const operation = new dcorejs.TransactionOperations.AssetFundPools(
    '1.2.1',
    {
        amount: 10,
        asset_id: '1.3.3'
    },
    {
        amount: 1,
        asset_id: '1.3.0'
    }
);
const transactionBuilder = dcorejs.transactionBuilder();
const result = transactionBuilder.addOperation(operation);
if (result === '') {
    transactionBuilder.broadcast(privateKey)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
} else {
    console.error(result);
} */

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
export default connect(mapStateToProps, mapDispatchToProps)(ConnectDecent)
