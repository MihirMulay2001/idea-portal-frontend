import React, {useEffect, useState} from 'react'
import Allideas from '../sections/Allideas'
import Mostrecent from '../sections/Mostrecent'
import Topvoted from '../sections/Topvoted'

export default function Homepage({value}) {
    const [ideas, setIdeas] = useState([])
    const {contract, currentAccount} = value;
  return (
      <div>
        <div>Homepage</div>
        <Allideas ideas={ideas}/>
        <Topvoted ideas={ideas}/>
        <Mostrecent value={value} ideas={ideas}/>
    </div>
  )
}
