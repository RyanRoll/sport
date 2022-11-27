import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles/index.module.scss'

export class Header extends React.Component {
  render() {
    const { type } = this.props
    return (
      <div
        className={`${styles.header} ${
          type === 'normal' ? styles.headerNormal : styles.headerSmall
        }`}
      >
        <div className={styles.logoBar}>
          <img className={styles.logo} src="/logo.png" alt="logo" />
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuLink}>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/simulator">デザインする</Link>
            </li>
            <li>
              <Link to="/guide">お買い物ガイド</Link>
            </li>
            <li>
              <Link to="/gallery">ギャラリー</Link>
            </li>
            <li>
              <Link to="/teamsfida">キャンペーン</Link>
            </li>
            <li>
              <Link to="/teamsfida">FAQ</Link>
            </li>
            <li>
              <a href="https://sfidasports.com/" target="__new">
                sfida
              </a>
            </li>
            <li>
              <Link to="/login">マイページ</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
  type: 'normal', // normal | small
}

export default Header
