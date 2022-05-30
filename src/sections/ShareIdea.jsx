import React, {useState} from 'react'
import ShareIdea from '../components/ShareIdea';
import styles from '../styles/shareidea.module.css'

export default function IdeaShare() {
  const [ideaPane, setIdeaPane] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIdeaPane(state => !state)
  }

  return (
    <div className={styles.container}>
      {
        ideaPane
        ? <ShareIdea onClick={handleToggle}  />
        : <>
          <div className={styles.component}>
            <div>Have an idea?</div>
            <div>Share it with the world!!</div>
          </div>
          <div>
            <button  className={styles.btn} onClick={handleToggle}>
              Share your idea!!
            </button>
          </div>
        </>
      }
      
    </div>
  )
}
