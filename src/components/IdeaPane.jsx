import React from 'react'
import styles from '../styles/ideapane.module.css'
import Tag from './Tag'


export default function IdeaPane({idea, contract, type}) {
  const [hasUpvoted, setHasUpvoted] = React.useState(false)
  // React.useEffect(()=>{
  //   const foo = async () => {
  //     if(contract.checkIfUpvoted()){
  //       setHasUpvoted(true)
  //     }
  //   }
  //   foo();
  // },[])
    const upvoteIdea = async(e) => {
      e.preventDefault()
      try{
        const trans = await contract.upVoteIdea(idea.id)
        await trans.wait()
        console.log("success");
      }catch(e){
        console.log(e);
      }
    }
    if(!idea){
        return <div></div>
    }
    const arr = idea.idea.split("$%")
    const techS = arr[3].split(',');
    const externalL = arr[4].split(',')
    console.log(techS, externalL);
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
          <span className={hasUpvoted ? styles.active : ''} onClick={upvoteIdea}>
            <i className="fas fa-arrow-up"></i>
          </span>
        {idea.votes}
        </div>
        <div>
          {
            techS.map((_t, key) => <Tag value={_t} key={key} />)
          }
        </div>
        <div className={styles.user}>
        @{idea.user}
        </div>
      </div>
    </div>
  )
}
