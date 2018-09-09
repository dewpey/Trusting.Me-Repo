// //////////////////////////////////////////////
// Connect uPort
// //////////////////////////////////////////////

export const connectUport = (data) => {
  return {
    type: 'CONNECT_UPORT',
    data
  }
}

export const connectUportVote = (data) => {
  return {
    type: 'CONNECT_UPORTVOTE',
    data
  }
}

export const MakerDaoLoan = (data) => {
  return {
    type: 'CONNECT_MAKERDAOLOAN',
    data
  }
}

export const ConnectLinkedIn = (data) => {
  return {
    type: 'CONNECT_LINKEDIN',
    data
  }
}

export const ConnectPlaid = (data) => {
  return {
    type: 'CONNECT_PLAID',
    data
  }
}
export const ConnectDecent = (data) => {
  return {
    type: 'CONNECT_DECENT',
    data
  }
}
export const ConnectAdChain = (data) => {
  return {
    type: 'CONNECT_ADCHAIN',
    data
  }
}
// //////////////////////////////////////////////
// Get Current Shares
// //////////////////////////////////////////////

export const getCurrentSharesREQUEST = () => {
  return {
    type: 'GET_CURRENT_SHARES_REQUEST'
  }
}
export const getCurrentSharesSUCCESS = (data) => {
  return {
    type: 'GET_CURRENT_SHARES_SUCCESS',
    data
  }
}
export const getCurrentSharesERROR = (data) => {
  return {
    type: 'GET_CURRENT_SHARES_ERROR',
    data
  }
}

export const updatesharesInput = (data) => {
  return {
    type: 'UPDATE_SHARES_INPUT',
    data
  }
}

// //////////////////////////////////////////////
// Buy Shares
// //////////////////////////////////////////////

export const buySharesREQUEST = (tx, amount) => {
  return {
    type: 'BUY_SHARES_REQUEST',
    amount: amount,
    buyingInProgress: true
  }
}
export const buySharesPENDING = () => {
  return {
    type: 'BUY_SHARES_PENDING'
  }
}
export const buySharesSUCCESS = (tx, data) => {
  return {
    type: 'BUY_SHARES_SUCCESS',
    tx: tx,
    data
  }
}
export const buySharesERROR = (data) => {
  return {
    type: 'BUY_SHARES_ERROR',
    data
  }
}

// //////////////////////////////////////////////
// Complete Buy Shares Demo
// //////////////////////////////////////////////

export const buySharesDemoComplete = (data) => {
  return {
    type: 'BUY_SHARES_DEMO_COMPLETE'
  }
}

// //////////////////////////////////////////////
// Complete Credentials Demo
// //////////////////////////////////////////////

export const credentialsDemoComplete = (data) => {
  return {
    type: 'CREDENTIALS_DEMO_COMPLETE'
  }
}

// //////////////////////////////////////////////
// Register App Area Complete
// //////////////////////////////////////////////

export const registerAppAreaComplete = (data) => {
  return {
    type: 'LOGOUT'
  }
}
