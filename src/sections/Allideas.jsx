import React, {useEffect, useState} from 'react'
import IdeaPane from '../components/IdeaPane'
import styles from '../styles/allideas.module.css'

export default function Allideas({ideas}) {
  if(ideas.length === 0){
      return <div>Fetching ideas</div>
  }
    return (
    <div className={styles.ideas_board}>
      <h1>All Ideas</h1>
      <div>
        {
            ideas.map((idea, key) => <IdeaPane idea={idea} key={key} type="enlarged"/>)
        }
      </div>
    </div>
  )
}
