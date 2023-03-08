import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'
import { Colors, PALETTE_TYPES } from '../Colors'
import DemoContext from '../../Demo/context'

import styles from './styles/socks.module.scss'

export class Socks extends React.Component {
  static contextType = DemoContext
  state = {
    feature: 'color', // 'style' | 'color' | 'icon'
  }
  render() {
    const { feature } = this.state
    let contentElement
    switch (feature) {
      case 'color':
        contentElement = this.renderColor()
        break
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
  renderColor = () => {
    const { skinData } = this.context
    const colors = skinData.socks?.colors
    let colorsData = DEFAULT_COLORS_DATA
    if (Array.isArray(colors)) {
      colorsData = DEFAULT_COLORS_DATA.map((item, index) => {
        return {
          ...item,
          ...colors[index],
        }
      })
    }
    return (
      <>
        <h1 className={styles.title}>パンツの配色を選んでください</h1>
        <div className={styles.content}>
          <Colors data={colorsData} onChangeColor={this.onChangeColor} />
        </div>
      </>
    )
  }
  renderStyle = () => {
    return (
      <>
        <h1 className={styles.title}>
          ソックスのデザインを選択してください
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>
          <Selector
            dataKey="socks.style"
            items={[
              {
                displayName: true,
                options: [
                  {
                    name: "ジャガードラインストッキング",
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs09.png',
                  },
                  {
                    name: "ロゴストッキング",
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/pants_thumbs08.png',
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
      case 'color':
      default:
        this.props.changeCategory('menu')
        break
      case 'style':
        this.setState({
          feature: 'color',
        })
        break
    }
  }
  onGoNext = () => {
    const { feature } = this.state
    switch (feature) {
      case 'color':
        this.setState({
          feature: 'style',
        })
      break
      case 'style':
      default:
        this.props.changeCategory('menu')
        const { skinData, setSkinData } = this.context
        skinData.socks.done = true
        setSkinData(skinData)
        break

    }
  }
  onChangeColor = (name, color, colorName, index) => {
    const { skinData, setSkinData } = this.context
    const { socks } = skinData
    socks.colors = socks.colors ?? []
    socks.colors[index] = {
      name,
      color,
      colorName,
    }
    setSkinData(skinData)
  }
}

export const DEFAULT_COLORS_DATA = [
  {
    name: 'ベース',
    color: '#ffffff',
    colorName: 'ホワイト',
    palette: PALETTE_TYPES.NORMAL,
  },
  
]

export default Socks
