import React from 'react'
import IdeaPane from '../components/IdeaPane';
import styles from '../styles/specialideas.module.css'

export default function SortedIdeas({ideas, type, name}) {
    const sortedIdeas =  type === "vote" ? sortIdeasVotes(ideas) : sortIdeasTime(ideas) ;;

  return (
      <div className={styles.container}>
        <h1>{name}</h1>
        <div>
        {
            sortedIdeas.length > 0 && 
            sortedIdeas.map( (idea,key) => <IdeaPane key={key} idea={idea} />)
        }
      </div>
    </div>
  )
}

function sortIdeasVotes(ideas){
    ideas.sort((a,b) => b.votes - a.votes);
    let arr = [];
    for(let i=0;i<5;i++){
        arr.push(ideas[i])
    }
    return arr;
}

function sortIdeasTime(ideas){
    let arr = []
    let numofideas = ideas.length
    let count = 5;
    while(count-- && numofideas--){
        arr.push(ideas[numofideas-1])
    }
    return arr;
}
