import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'

import styles from './styles/number.module.scss'

export class Number extends React.Component {
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
      case 'number':
        contentElement = this.renderNumber()
        break
      case 'font':
        contentElement = this.renderFont()
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
          番号の位置/有無を選択してください
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>番号の位置</div>
      </>
    )
  }
  renderColor = () => {
    return (
      <>
        <h1 className={styles.title}>配色を選んでください</h1>
        <div className={styles.content}>Color</div>
      </>
    )
  }
  renderNumber = () => {
    return (
      <>
        <h1 className={styles.title}>番号のフォントを選択してください</h1>
        <div className={styles.content}>Number</div>
      </>
    )
  }
  renderFont = () => {
    return (
      <>
        <h1 className={styles.title}>番号のフォントを選択してください</h1>
        <div className={styles.content}>
          <Selector
            dataKey="number.font"
            items={[
              {
                displayName: true,
                type: 'list',
                options: [
                  {
                    name: 'Anton',
                    text: '01 1234567890',
                    style: {
                      fontFamily: 'Anton',
                    },
                  },
                  {
                    name: 'Chewy',
                    text: '01 1234567890',
                    style: {
                      fontFamily: 'Chewy',
                    },
                  },
                  {
                    name: 'Dosis',
                    text: '01 1234567890',
                    style: {
                      fontFamily: 'Dosis',
                    },
                  },
                ],
              },
            ]}
          />
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
      case 'color':
        this.setState({
          feature: 'style',
        })
        break
      case 'number':
        this.setState({
          feature: 'color',
        })
        break
      case 'font':
        this.setState({
          feature: 'number',
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
          feature: 'number',
        })
        break
      case 'number':
        this.setState({
          feature: 'font',
        })
        break
      case 'font':
        this.props.changeCategory('menu')
        break
    }
  }
}

export default Number
