import React, {useEffect, useState} from 'react'
import Allideas from '../sections/Allideas'
import tempdata from '../data/temp.json'
import Header from '../sections/Header'
import ShareIdea from '../sections/ShareIdea'
import styles from '../styles/homepage.module.css'
import SortedIdeas from '../sections/SortedIdeas'
import Footer from '../sections/Footer'

export default function Homepage({value}) {
    const [ideas, setIdeas] = useState([])
    const {contract, currentAccount} = value;

    console.log(ideas);
    useEffect(() => {
      try{
        if(contract !== null){
          const foo = async() => {
          const arr = await contract.getIdeas();
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
      <div className={styles.container}>
        
        <ShareIdea />
        <div className={styles.idea_pane}>
          <SortedIdeas ideas={ideas} type="vote" name="Top Voted"/>
          <SortedIdeas ideas={ideas} type="time" name="Most Recent"/>
        </div>
        <Allideas ideas={ideas}/>
      </div>
        <Footer />
      </>
  )
}
