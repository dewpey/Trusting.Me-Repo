import React, {Component} from 'react'

import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'
import Maker from '@makerdao/dai';

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
        const makerBrowser = Maker.create('browser');
        const makerTest = Maker.create('test');
        maker.authenticate(()=>{
            const cdp = maker.openCdp();
            cdp.ockEth(0.25);
        cdp.drawDai(50);
        const debt = cdp.getDebtValue();
        console.log(debt.toString);
        })
       

        

        
        
        return (
            <div>
                hi
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
