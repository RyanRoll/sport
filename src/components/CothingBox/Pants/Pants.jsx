import React from 'react'

import Navigation from '../Navigation'
import styles from './styles/pants.module.scss'

export class Pants extends React.Component {
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
          カ元にするパンツデザインを選んでください
        </h1>
        <div className={styles.content}>Pants</div>
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

export default Pants
