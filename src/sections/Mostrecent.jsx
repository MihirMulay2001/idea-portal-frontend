import React, {useContext, useState, useEffect} from 'react'
import IdeaPane from '../components/IdeaPane'

export default function Mostrecent({ideas, value}) {
    // const {contract, account} = value
    const mostrecent = sortideas(ideas)
  return (
      <div>
        <h1>Most Recent</h1>
        <div>
            {
                mostrecent.length > 0 && mostrecent.map((idea, key) => <IdeaPane key={key} idea={idea} />)
            }
        </div>
    </div>
  )
}

function sortideas(ideas){
    let arr = []
    let numofideas = ideas.length
    let count = 5;
    while(count-- && numofideas--){
        arr.push(ideas[numofideas-1])
    }
    return arr;
}