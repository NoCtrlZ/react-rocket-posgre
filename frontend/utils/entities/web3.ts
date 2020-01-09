import Web3 from 'web3'

declare global {
    interface Window { web3: any; }
}

export const web3 = new Web3(window.web3.currentProvider);
