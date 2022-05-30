import React, {useState} from 'react'
import ShareIdea from '../components/ShareIdea';

export default function IdeaShare() {
  const [ideaPane, setIdeaPane] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIdeaPane(state => !state)
  }

  return (
    <div>
      {
        ideaPane && <ShareIdea onClick={handleToggle}  />
      }
      <div>
        <div>Have an idea?</div>
        <div>Share it with the world!!</div>
      </div>
      <div>
        <button onClick={handleToggle}>
          Share your idea!!
        </button>
      </div>
    </div>
  )
}
