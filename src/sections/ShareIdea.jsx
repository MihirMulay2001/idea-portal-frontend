import React, {useState} from 'react'
import ShareIdea from '../components/ShareIdea';
import styles from '../styles/shareidea.module.css'

export default function IdeaShare({contract}) {
  const [ideaPane, setIdeaPane] = useState(false);

  const handleToggle = () => {
    setIdeaPane(state => !state)
  }
  const handleClose = (e) => {
    e.preventDefault();
    handleToggle()
  }

  return (
    <div className={styles.container}>
      {
        ideaPane
        ? <ShareIdea onClick={handleToggle} contract={contract} />
        : <>
          <div className={styles.component}>
            <div>Have an idea?</div>
            <div>Share it with the world!!</div>
          </div>
          <div>
            <button  className={styles.btn} onClick={handleClose}>
              Share your idea!!
            </button>
          </div>
        </>
      }
      
    </div>
  )
}
