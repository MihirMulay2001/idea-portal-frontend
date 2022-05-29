import React, {useContext, useState, useEffect} from 'react'
import IdeaPane from '../components/IdeaPane'

export default function Mostrecent({ideas, value}) {
    const {contract, account} = value
    const mostrecent = sortideas(ideas, contract, account)
  return (
      <div>
        <div>Mostrecent</div>
        {
            mostrecent.length > 0 && mostrecent.map((idea, key) => <IdeaPane key={key} idea={idea} />)
        }
    </div>
  )
}

async function sortideas(ideas){
    let arr = []
    let numofideas = ideas.length
    while(numofideas--){
        arr.push(ideas[numofideas])
    }
    return arr;
}