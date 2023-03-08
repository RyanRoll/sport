import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'
import { badgeItems } from './data'
import DemoContext from '../../Demo/context'

import styles from './styles/badge.module.scss'

export class Badge extends React.Component {
  static contextType = DemoContext
  state = {
    feature: 'style', // 'style' | 'color' | 'icon'
  }
  render() {
    const { feature } = this.state
    let contentElement
    switch (feature) {
      case 'style':
      default:
        contentElement = this.renderStyle()
        break
    }
    return (
      <>
        {contentElement}
        <Navigation onGoPrev={this.onGoPrev} onGoNext={this.onGoNext} />
      </>
    )
  }
  renderStyle = () => {
    return (
      <>
        <h1 className={styles.title}>
          名前の位置/有無を選択してください
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>
          <Selector dataKey="Badge.style" items={badgeItems} />
        </div>
      </>
    )
  }
  onGoPrev = () => {
    const { feature } = this.state
    switch (feature) {
      case 'style':
      default:
        this.props.changeCategory('menu')
        break
    }
  }
  onGoNext = () => {
    const { feature } = this.state
    switch (feature) {
      case 'style':
      default:
        this.props.changeCategory('menu')
        const { skinData, setSkinData } = this.context
        skinData.badge.done = true
        setSkinData(skinData)
        break
    }
  }
}

export default Badge
