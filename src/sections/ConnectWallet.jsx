import React from 'react'

export default function ConnectWallet({setCurrentAccount}) {

    const connectWalletHandler = async () => {
      const {ethereum} = window;
      if(!ethereum){
        alert("Make sure you have metamask installed")
      }else{
        try{
          const accounts = await ethereum.request({method: 'eth_requestAccounts'})
          setCurrentAccount(accounts[0])
        }catch(error){
          console.log(error);
        }
      }
   }
  return (
    <div>
        <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
            Connect Wallet
        </button>
    </div>
  )
}
