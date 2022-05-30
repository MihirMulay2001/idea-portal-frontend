import React from 'react'
import styles from '../styles/tag.module.css'


export default function Tag({value, size}) {
  return (
    <span className={styles.container}>{value}</span>
  )
}
