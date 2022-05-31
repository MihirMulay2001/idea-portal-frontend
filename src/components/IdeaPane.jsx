import React from 'react'
import styles from '../styles/ideapane.module.css'
import Tag from './Tag'


export default function IdeaPane({idea, contract, type, hadNFT}) {
  const [hasUpvoted, setHasUpvoted] = React.useState(false)
    React.useEffect(()=>{

      if(contract !== null && idea){
        const foo = async () => {
          if(await contract.checkIfUserUpvoted(idea.id)){
            setHasUpvoted(true)
          }
        }
        foo();
    }

    },[contract, idea])


    const upvoteIdea = async(e) => {
      e.preventDefault()
      if(hadNFT){
        try{
          const trans = await contract.toggleVote(idea.id)
          await trans.wait()
          console.log("success");
          if(await contract.checkIfUserUpvoted(idea.id)){
            setHasUpvoted(true)
          }
        }catch(e){
          console.log(e);
        }
      }else{
        alert("Mint a buildspace NFT to vote")
      }
    }


    if(!idea){
        return <div></div>
    }


    const arr = idea.idea.split("$%")
    const techS = arr[3].split(',');
    const externalL = arr[4].split(',')



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
        { type === "enlarged"
        ? <>
            <div>
              {
                techS.map((_t, key) => <Tag value={_t} key={key} />)
              }
            </div>
            <div className={styles.user}>
            @{idea.user}
            </div>
          </>
        :''
        }
      </div>
    </div>
  )
}
