import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'
import { teamNameItems } from './data'
import DemoContext from '../../Demo/context'

import styles from './styles/teamName.module.scss'

export class TeamName extends React.Component {
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
          <Selector dataKey="teamName.style" items={teamNameItems} />
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
        skinData.teamName.done = true
        setSkinData(skinData)
        break
    }
  }
}

export default TeamName
