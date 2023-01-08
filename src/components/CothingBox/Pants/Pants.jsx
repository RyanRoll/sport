import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'

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
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>
          <Selector
            dataKey="pants.style"
            items={[
              {
                displayName: true,
                types: [
                  {
                    name: "Presser'23",
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs09.png',
                  },
                  {
                    name: "NOISER'22",
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs08.png',
                  },
                  {
                    name: "HEX LINE'21",
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs06.png',
                  },
                  {
                    name: "HEX-BOLD'21",
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs07.png',
                  },
                  {
                    name: 'BASIC05 CENTERLINE',
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs01.png',
                  },
                  {
                    name: 'BASIC08 WAVE02',
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs03.png',
                  },
                ],
              },
            ]}
          />
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

export default Pants
