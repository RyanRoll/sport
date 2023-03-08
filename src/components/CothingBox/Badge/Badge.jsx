import React from 'react'

import Navigation from '../Navigation'
import Selector from '../Selector'
import { badgeItems } from './data'
import InputField from '../InputField'
import DemoContext from '../../Demo/context'

import styles from './styles/badge.module.scss'

export class Badge extends React.Component {
  static contextType = DemoContext
  state = {
    feature: 'style',
    setStyleOnly: false,
    isNextToLast: false,
  }
  render() {
    const { feature, isNextToLast } = this.state
    let contentElement
    switch (feature) {
      case 'badge':
        contentElement = this.renderBadge()
        break
      case 'badgeName':
        contentElement = this.renderBadgeName()
        break
      case 'font':
        contentElement = this.renderFont()
        break
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
        <Navigation
          onGoPrev={this.onGoPrev}
          onGoNext={this.onGoNext}
          isNextToLast={isNextToLast}
        />
      </>
    )
  }
  componentDidMount = () => {
    this.detectIfComplete()
  }
  componentDidUpdate = () => {
    this.detectIfComplete()
  }
  detectIfComplete = () => {
    const { isNextToLast } = this.state
    const {
      skinData: { badge },
    } = this.context
    const [shirt, pants] = badge.style ?? []
    if (shirt === 'シャツ2' && pants === 'パンツ2') {
      if (!isNextToLast) {
        this.setState({
          setStyleOnly: true,
          isNextToLast: true,
        })
      }
    } else if (isNextToLast) {
      this.setState({
        setStyleOnly: false,
        isNextToLast: false,
      })
    }
  }
  renderStyle = () => {
    return (
      <>
        <h1 className={styles.title}>
          名前の位置/有無を選択してください
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>
          <Selector dataKey="badge.style" items={badgeItems} />
        </div>
      </>
    )
  }
  renderBadge = () => {
    return (
      <>
        <h1 className={styles.title}>
          エンブレム02
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>Badge</div>
      </>
    )
  }
  renderBadgeName = () => {
    return (
      <>
        <h1 className={styles.title}>
          エンブレムテキスト
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>
          <InputField title="エンブレムテキスト" defaultValue="sfida" />
        </div>
      </>
    )
  }
  renderFont = () => {
    return (
      <>
        <h1 className={styles.title}>
          エンブレムテキスト
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>Font</div>
      </>
    )
  }
  renderColor = () => {
    return (
      <>
        <h1 className={styles.title}>
          配色を選んでください
          <i className={styles.icon}></i>
        </h1>
        <div className={styles.content}>Color</div>
      </>
    )
  }
  onGoPrev = () => {
    const { feature } = this.state
    this.setState({
      isNextToLast: false,
    })
    switch (feature) {
      case 'style':
      default:
        this.props.changeCategory('menu')
        break
      case 'badge':
        this.setState({
          feature: 'style',
        })
        break
      case 'badgeName':
        this.setState({
          feature: 'badge',
        })
        break
      case 'font':
        this.setState({
          feature: 'badgeName',
        })
        break
      case 'color':
        this.setState({
          feature: 'font',
        })
        break
    }
  }
  onGoNext = () => {
    const { feature, setStyleOnly } = this.state
    if (setStyleOnly) {
      this.complete()
      return
    }
    this.setState({
      isNextToLast: false,
    })
    switch (feature) {
      case 'style':
        this.setState({
          feature: 'badge',
        })
        break
      case 'badge':
        this.setState({
          feature: 'badgeName',
        })
        break
      case 'badgeName':
        this.setState({
          feature: 'font',
        })
        break
      case 'font':
        this.setState({
          feature: 'color',
          isNextToLast: true,
        })
        break
      case 'color':
      default:
        this.complete()
        break
    }
  }
  complete = () => {
    this.props.changeCategory('menu')
    const { skinData, setSkinData } = this.context
    skinData.badge.done = true
    setSkinData(skinData)
  }
}

export default Badge
