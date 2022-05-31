import './App.css';
import React, {useState, useEffect} from 'react';
import Homepage from './pages/Homepage';
import IdeaPortal from './contracts/IdeaPortal.json'
import { ethers } from 'ethers';
import ConnectWallet from './sections/ConnectWallet';
import { useMoralisWeb3Api } from "react-moralis";

;

const contractAddress = "0x053F5A2E2b66a213d5f22c3Cf578E31d501AE68b";
// require('dotenv').config()
function App() {
  const Web3Api = useMoralisWeb3Api()
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contract, setContract] = useState(null)
  const [checkNFT, setCheckNFT] = useState(true)
  const fetchNFTsForContract = async () => {
    const options = {
      chain: "polygon",
      address: currentAccount,
      token_address: '0x3CD266509D127d0Eac42f4474F57D0526804b44e',
    };
    const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
    if(polygonNFTs.total > 0){
      setCheckNFT(true);
    }else{
      setCheckNFT(false)
    }
  };

  const checkWalletIsConnected = () => { 
    const {ethereum} = window;
    if(ethereum){
      console.log("We are good to go!");
      
    }else{
        alert("Make sure you have metamask installed")
    }
  }


  const getContract = async () => {

    try{
      const {ethereum} = window;
      if(ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner();
        const _IdeaPortalContract = new ethers.Contract(contractAddress,IdeaPortal.abi, signer)
        setContract(_IdeaPortalContract)  
        fetchNFTsForContract()
      }else{
        console.log("Object doesn't exist");
      }
    }catch(e){
      console.log(e);
    }
    
  };

   useEffect(() => {
    checkWalletIsConnected();
    if(window.ethereum && currentAccount){
      getContract()
    }
  }, [currentAccount])
  window.ethereum.on('accountsChanged', function (accounts) {
        setCurrentAccount(accounts[0]);
        console.log(accounts[0]);
    })

  return (
    <div className="App">
      <div>
        {currentAccount != null
        ? <Homepage value={{contract, currentAccount, checkNFT}} />
        : <ConnectWallet setCurrentAccount={setCurrentAccount} />
        }
      </div>
    </div>
  );
}

export default App;
