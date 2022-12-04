import React from 'react'

import ClothingBox from '../CothingBox'
import styles from './styles/index.module.scss'

export class Demo extends React.Component {
  render() {
    return (
      <div className={styles.demo}>
        <ClothingBox />
      </div>
    )
  }
}

export default Demo
