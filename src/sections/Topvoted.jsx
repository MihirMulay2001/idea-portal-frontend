import React from 'react'
import IdeaPane from '../components/IdeaPane';

export default function Topvoted({ideas}) {
    const topvoted = sortIdeas(ideas);

  return (
      <div>
      <h1>Top Voted</h1>
      <div>
      {
          topvoted.length > 0 && topvoted.map( (idea,key) => <IdeaPane key={key} idea={idea} />)
      }
      </div>
    </div>
  )
}

function sortIdeas(ideas){
    ideas.sort((a,b) => b.votes - a.votes);
    let arr = [];
    for(let i=0;i<5;i++){
        arr.push(ideas[i])
    }
    return arr;
}

