import React from 'react'

export default function IdeaPane({idea}) {
    if(!idea){
        return <div>not found</div>
    }
  return (
    <div>{idea.idea}</div>
  )
}
