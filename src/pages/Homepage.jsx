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
    const {contract} = value;
    const [checkNFT, setCheckNFT] = useState(false)

    useEffect(() => {
      try{
        if(contract !== null){
          const foo = async() => {
          const aww = await contract.getIdeas();
          const arr = aww.map(_i => Object.assign({id: _i[0], votes: _i[1], idea: _i[2], user: _i[3]}))
          console.log(arr);
          setIdeas(arr.length !== 0 ? arr : tempdata);
        }
        foo();
        }
      }catch(e){
        console.log(e);
      }
    },[contract])

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
