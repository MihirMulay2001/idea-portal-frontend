import React, {useEffect, useState} from 'react'
import Allideas from '../sections/Allideas'
import tempdata from '../data/temp.json'
import Header from '../sections/Header'
import ShareIdea from '../sections/ShareIdea'
import styles from '../styles/homepage.module.css'
import SortedIdeas from '../sections/SortedIdeas'
import Footer from '../sections/Footer'
import MintNFT from '../components/MintNFT'

export default function Homepage({value}) {
    const [ideas, setIdeas] = useState([])
    const {contract, currentAccount} = value;
    const [checkNFT, setCheckNFT] = useState(true)
    useEffect(() => {
      let filter;
      try{
        if(contract !== null){
          filter = contract.filters.VoteChange(currentAccount, null);
          const foo = async() => {
            const aww = await contract.getIdeas();
            const arr = aww.map(_i => ({id: _i[0], votes: _i[1], idea: _i[2], user: _i[3]}))
            setIdeas(arr);
            contract.on("IdeaSet", onNewIdea); 
            contract.on(filter, onUpvote)
            const hnft = await contract.walletHoldsToken('0x495b25d6bf416f3c7f7537b342ae775a4612f173')
            console.log(hnft);
          }
        foo();
        }
        const onUpvote = async () => {
          setIdeas(await contract.getIdeas());
        }
        const onNewIdea = async (_id, _votes, _idea, _from) => {
            console.log("once");
            const aww = await contract.getIdeas();
            const arr = aww.map(_i => ({id: _i[0], votes: _i[1], idea: _i[2], user: _i[3]}))
            setIdeas(arr);
          }
          return () => {
          if (contract) {
            contract.off("IdeaSet", onNewIdea);
            contract.off(filter, onUpvote)
          }
        };
      }catch(e){
        console.log(e);
      }
      
    },[contract, currentAccount])

  return (
    <>
    <Header />
    { !checkNFT && <MintNFT />}
      <div className={styles.container}>
        
        { checkNFT && <ShareIdea contract={contract} />}
        <div className={styles.idea_pane}>
          <SortedIdeas contract={contract} ideas={ideas} type="vote" name="Top Voted"/>
          <SortedIdeas contract={contract} ideas={ideas} type="time" name="Most Recent"/>
        </div>
        <Allideas ideas={ideas} contract={contract}/>
      </div>
        <Footer />
      </>
  )
}
