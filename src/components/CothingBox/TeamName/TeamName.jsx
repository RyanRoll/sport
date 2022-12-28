import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'
import { teamNameItems } from './data'

import styles from './styles/teamName.module.scss'

export class TeamName extends React.Component {
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
      case 'color':
        contentElement = this.renderColor()
        break
      case 'icon':
        contentElement = this.renderIcon()
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
          <Selector items={teamNameItems} />
        </div>
      </>
    )
  }
  renderColor = () => {
    return (
      <>
        <h1 className={styles.title}>パンツの配色を選んでください</h1>
        <div className={styles.content}>Color</div>
      </>
    )
  }
  renderIcon = () => {
    return (
      <>
        <h1 className={styles.title}>ロゴカラーを選択してください</h1>
        <div className={styles.content}>Icon</div>
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
      case 'color':
        this.setState({
          feature: 'style',
        })
        break
      case 'icon':
        this.setState({
          feature: 'color',
        })
        break
    }
  }
  onGoNext = () => {
    const { feature } = this.state
    switch (feature) {
      case 'style':
      default:
        this.setState({
          feature: 'color',
        })
        break
      case 'color':
        this.setState({
          feature: 'icon',
        })
        break
      case 'icon':
        this.props.changeCategory('menu')
        break
    }
  }
}

export default TeamName
