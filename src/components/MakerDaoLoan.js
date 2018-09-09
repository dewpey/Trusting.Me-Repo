import React, { Component } from 'react'

import {uport} from '../utilities/uportSetup'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as AppActions from '../actions/AppActions'

class MakerDaoLoan extends Component {
    constructor(props) {
        super(props)
    }
    render() {
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
