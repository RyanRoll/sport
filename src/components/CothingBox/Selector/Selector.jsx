import React from 'react'
import classnames from 'classnames'

import DemoContext from '../../Demo/context'

import styles from './styles/selector.module.scss'

export class Selector extends React.Component {
  static contextType = DemoContext
  render() {
    const { items } = this.props
    return items.map((group, index) => {
      const { displayName = false, header, types = [] } = group
      const selectedName = this.getSelectedData(index)
      return (
        <div key={index} className={styles.group}>
          {displayName && <h2 className={styles.groupName}>{selectedName}</h2>}
          {header && <h3 className={styles.header}>{header}</h3>}
          <div className={styles.typeBlock}>
            {types.map((type, typeIndex) => {
              const { name, icon } = type
              return (
                <span
                  key={typeIndex}
                  className={classnames(styles.type, {
                    [styles.selected]: selectedName === name,
                  })}
                  onClick={this.onClickType.bind(this, index, name)}
                >
                  {<img src={icon} className={styles.typeIcon} alt=""></img>}
                </span>
              )
            })}
          </div>
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
    const { dataKey } = this.props
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
  }
}

Selector.defaultProps = {
  items: [],
}

export default Selector
