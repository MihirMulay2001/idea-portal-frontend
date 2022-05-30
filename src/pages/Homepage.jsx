import React, {useEffect, useState} from 'react'
import Allideas from '../sections/Allideas'
import Mostrecent from '../sections/Mostrecent'
import Topvoted from '../sections/Topvoted'
import tempdata from '../data/temp.json'
import Header from '../sections/Header'
import ShareIdea from '../sections/ShareIdea'
import styles from '../styles/homepage.module.css'

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
      <div>
        <Header />
        <ShareIdea />
        <div className={styles.idea_pane}>
          <Topvoted ideas={ideas}/>
          <Mostrecent value={value} ideas={ideas}/>  
        </div>
        <Allideas ideas={ideas}/>
      </div>
  )
}
