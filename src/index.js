// Frameworks
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import App from './App'

// Styles
import './index.css'

const StoreInstance = Store()

ReactDOM.render(
  
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
 document.getElementById('root')
)
