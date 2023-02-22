import React from 'react'
import classnames from 'classnames'

import DemoContext from '../../Demo/context'

import styles from './styles/selector.module.scss'

export class Selector extends React.Component {
  static contextType = DemoContext
  render() {
    const { items } = this.props
    return items.map((group, index) => {
      const { displayName = false, header, options = [], type = 'icon' } = group
      const selectedName = this.getSelectedData(index)
      let elements
      switch (type) {
        case 'list': {
          elements = this.renderList(options, selectedName, index)
          break
        }
        default:
        case 'icon': {
          elements = this.renderIcons(options, selectedName, index)
          break
        }
      }
      return (
        <div key={index} className={styles.group}>
          {displayName && <h2 className={styles.groupName}>{selectedName}</h2>}
          {header && <h3 className={styles.header}>{header}</h3>}
          <div className={styles.typeBlock}>{elements}</div>
        </div>
      )
    })
  }
  renderIcons = (options, selectedName, index) => {
    return options.map((option, optionIndex) => {
      const { name, icon } = option
      return (
        <span
          key={optionIndex}
          className={classnames(styles.option, {
            [styles.selected]: selectedName === name,
          })}
          onClick={this.onClickType.bind(this, index, name)}
        >
          {<img src={icon} className={styles.optionIcon} alt=""></img>}
        </span>
      )
    })
  }
  renderList = (options, selectedName, index) => {
    return options.map((option, optionIndex) => {
      const { name, text, style } = option
      return (
        <div
          key={optionIndex}
          className={classnames(styles.listOption, {
            [styles.selected]: selectedName === name,
          })}
          onClick={this.onClickType.bind(this, index, name)}
          style={style}
        >
          {text}
        </div>
      )
    })
  }
  onClickType = (index, name) => {
    const { dataKey } = this.props
    if (dataKey) {
      const { skinData, setSkinData } = this.context
      const splits = dataKey.split('.')
      const last = splits.pop()
      let reference = skinData
      splits.forEach((key) => {
        if (!reference[key]) {
          reference[key] = {}
        }
        reference = reference[key]
      })
      // const data = (reference[last] = []) // this is error, the data will be convered
      const data = reference[last] ?? []
      data[index] = name
      reference[last] = data
      setSkinData(skinData)
    }
  }
  getSelectedData = (index) => {
    const { dataKey, items } = this.props
    if (dataKey) {
      const { skinData } = this.context
      const splits = dataKey.split('.')
      let reference = skinData
      splits.every((key) => {
        if (!reference[key]) {
          reference = null
          return false
        }
        reference = reference[key]
        return true
      })
      if (Array.isArray(reference)) {
        return reference[index]
      }
    }
    return items?.[index]?.options?.[0]?.name
  }
}

Selector.defaultProps = {
  items: [],
}

export default Selector
