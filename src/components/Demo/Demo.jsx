import React from 'react'

import ClothingBox from '../CothingBox'
import styles from './styles/demo.module.scss'

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
