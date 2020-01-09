import Web3 from "web3";
import { web3 } from "../entities/web3";

declare global {
    interface Window { web3: any, ethereum: any; }
}

export async function getWalletAddress() {
    if (window.ethereum) {
        window.web3 = new Web3(window['ethereum']);
        try {
            let accounts = await window['ethereum'].enable();
            return accounts[0]
        }
        catch (err) {
            return false
        }
    }
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        let accounts = await web3.eth.getAccounts();
        return accounts[0]
    }
    else {
        return false
    }
}
