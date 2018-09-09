import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('Wyoming Voting Clerk', {
  clientId: '2oxyGZP7rBK57rSqTXx8QELspGkMVVmsvDu',
  signer: SimpleSigner('b37c4136be0dc939f448c3954d24d225e2506de044f95bc380394e9e96a5c077')
})

const web3 = uport.getWeb3()
export { web3, uport }
