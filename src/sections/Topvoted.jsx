import React from 'react'
import IdeaPane from '../components/IdeaPane';

export default function Topvoted({ideas}) {
    const topvoted = sortIdeas(ideas);

  return (
      <div>
    <div>Topvoted</div>
    {
        topvoted.map( (idea,key) => <IdeaPane key={key} idea={idea} />)
    }
    </div>
  )
}

function sortIdeas(ideas){
    ideas.sort((a,b) => b.votes - a.votes);
    console.log(ideas);
    let arr = [];
    for(let i=0;i<5;i++){
        arr.push(ideas[i])
    }
    return arr;
}

