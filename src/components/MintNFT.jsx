import React from 'react'
import styles from '../styles/header.module.css'
export default function MintNFT() {
  return (
    <div className={styles.component}>
        <div>
            <div>
                You don't have a buildspace NFT yet
            </div>
            <div>
                Complete a project to get an NFT
                and be able to share and vote on ideas
            </div>
        </div>
        <div>
            <button>
                <a href="https://buildspace.so/">Start a project</a>
            </button>
        </div>
    </div>
  )
}
