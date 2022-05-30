import { Contract } from 'ethers'
import React from 'react'
import styles from '../styles/ideapane.module.css'


export default function IdeaPane({idea}) {
  const [hasUpvoted, setHasUpvoted] = React.useState(false)
  // React.useEffect(()=>{
  //   const foo = async () => {
  //     if(Contract.checkIfUpvoted()){
  //       setHasUpvoted(true)
  //     }
  //   }
  //   foo();
  // },[])
    if(!idea){
        return <div>not found</div>
    }
    const arr = idea.idea.split("$%")
  return (
    <div className={styles.container}>
      <div className={styles.ideaname}>
        <b>{arr[0]}</b>
      </div>
      <div>
        {arr[1]}
      </div>
      <div className={styles.last_row}>
        <div className={styles.votes}>
          <span className={hasUpvoted ? styles.active : ''}>
            <i className="fas fa-arrow-up"></i>
          </span>
        {idea.votes}
        </div>
        <div className={styles.user}>
        @{idea.user}
        </div>
      </div>
    </div>
  )
}
