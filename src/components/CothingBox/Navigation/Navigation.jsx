import React from 'react'

import styles from './styles/navigation.module.scss'

export class Navigation extends React.Component {
  render() {
    const { onGoPrev, onGoNext } = this.props
    return (
      <div className={styles.navigation}>
        <button className={styles.prev} onClick={onGoPrev}>
          前に戻る
        </button>
        <button className={styles.next} onClick={onGoNext}>
          次へ進む
        </button>
      </div>
    )
  }
}

export default Navigation
