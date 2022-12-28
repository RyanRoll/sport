import React from 'react'
import classnames from 'classnames'

import styles from './styles/selector.module.scss'

export class Selector extends React.Component {
  state = {
    selectedType: {},
  }
  render() {
    const { items } = this.props
    const { selectedType } = this.state
    return items.map((group, index) => {
      const { displayName = false, header, types = [] } = group
      const selectedName = selectedType[index]
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
    const { selectedType } = this.state
    selectedType[index] = name
    this.setState({
      selectedType,
    })
  }
}

Selector.defaultProps = {
  items: [],
}

export default Selector
