import React from 'react'
import IdeaPane from '../components/IdeaPane';
import styles from '../styles/specialideas.module.css'

export default function SortedIdeas({ideas, type, name, contract, hadNFT}) {
    const sortedIdeas =  type === "vote" ? sortIdeasVotes(ideas) : sortIdeasTime(ideas) ;;

  return (
      <div className={styles.container}>
        <h1>{name}</h1>
        <div>
        {
            sortedIdeas.length > 0 && 
            sortedIdeas.map( (idea,key) => 
            <IdeaPane key={key} idea={idea} type="compressed" contract={contract} hadNFT={hadNFT}/>
            )
        }
      </div>
    </div>
  )
}

function sortIdeasVotes(ideas){
    const aww = ideas.slice().sort((a,b) => b.votes - a.votes);
    let arr = [];
    for(let i=0;i<5;i++){
        arr.push(aww[i])
    }
    return arr;
}

function sortIdeasTime(ideas){
    let arr = []
    let numofideas = ideas.length
    let count = 5;
    if(ideas.length < 5){
      return ideas
    }
    while(count-- && numofideas--){
        arr.push(ideas[numofideas])
    }
    return arr;
}
