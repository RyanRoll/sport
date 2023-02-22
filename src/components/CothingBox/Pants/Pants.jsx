import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'
import { Colors, PALETTE_TYPES } from '../Colors'
import DemoContext from '../../Demo/context'

import styles from './styles/pants.module.scss'

export class Pants extends React.Component {
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
                options: [
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
    const { skinData } = this.context
    const colors = skinData.pants?.colors
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
  renderIcon = () => {
    return (
      <>
        <h1 className={styles.title}>ロゴカラーを選択してください</h1>
        <div className={styles.content}>
          <Selector
            dataKey="pants.icon"
            items={[
              {
                displayName: true,
                options: [
                  {
                    name: 'GOLD',
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/logocolor_sample01.png',
                  },
                  {
                    name: 'BLACK',
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/logocolor_sample02.png',
                  },
                  {
                    name: 'WHITE',
                    icon: 'https://xu.sfidasports.com/assets2/thumbs/logocolor_sample03.png',
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
        const { skinData, setSkinData } = this.context
        skinData.pants.done = true
        setSkinData(skinData)
        break
    }
  }
  onChangeColor = (name, color, colorName, index) => {
    const { skinData, setSkinData } = this.context
    const { pants } = skinData
    pants.colors = pants.colors ?? []
    pants.colors[index] = {
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
  {
    name: 'サブカラー①',
    color: '#058893',
    colorName: 'レイクブルー',
    palette: PALETTE_TYPES.NORMAL,
  },
  {
    name: 'サブカラー②',
    color: '#5e3b68',
    colorName: 'パープル（濃）',
    palette: PALETTE_TYPES.ADVANCED,
  },
  {
    name: 'サブカラー③',
    color: '#c1343c',
    colorName: 'レッド',
    palette: PALETTE_TYPES.NORMAL,
  },
]

export default Pants
