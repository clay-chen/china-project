import '../assets/web3.min'
import '../assets/truffle-contract'
import CommentFactory from '../contracts/CommentFactory'

let App = {
  web3: null,
  web3Provider: null,
  contracts: {},
  init: function () {
    return App.initWeb3()
  },
  initWeb3: function () {
    if (App.web3 === null) {
      // If no injected web3 instance is detected, fall back to Ganache
      App.web3Provider = new window.Web3.providers.HttpProvider('http://127.0.0.1:7545');
      App.web3 = new window.Web3(App.web3Provider);
    }

    return App.initContract();
  },
  initContract: function () {
    App.contracts.commentFactory = window.TruffleContract(CommentFactory);
    // Set the provider for our contract
    App.contracts.commentFactory.setProvider(App.web3Provider);
  }
};

export default App;
