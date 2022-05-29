import React, {useEffect, useState} from 'react'
import IdeaPane from '../components/IdeaPane'

export default function Allideas({ideas}) {
  if(ideas.length === 0){
      return <div>Fetching ideas</div>
  }
    return (
    <div className="all_ideas_board">
        {
            ideas.map((idea, key) => <IdeaPane idea={idea} key={key} type="compressed"/>)
        }
    </div>
  )
}
