import React, { useCallback, useState } from 'react'
import classnames from 'classnames'

import { Palette, PALETTE_TYPES } from './Palette'

import styles from './styles/colors.module.scss'

export { PALETTE_TYPES }

export const Colors = (props) => {
  const { colors } = props
  const [activeArea, setActiveArea] = useState([0, props.colors[0]])
  const onClickArea = useCallback(
    (index, data) => {
      setActiveArea([index, data])
    },
    [setActiveArea],
  )
  const [activeIndex, activeAreaData] = activeArea
  return (
    <div className={styles.main}>
      <div className={styles.area}>
        {colors.map((data, index) => {
          const { name, color } = data
          return (
            <div
              className={styles.areaItem}
              key={name}
              onClick={onClickArea.bind(null, index, data)}
            >
              <span
                className={classnames(styles.areaColor, {
                  [styles.areaSelected]: name === activeAreaData.name,
                })}
                style={{ background: color }}
              ></span>
              <div className={styles.areaName}>{name}</div>
            </div>
          )
        })}
      </div>
      <div className={styles.palette}>
        <Palette
          selectedColor={activeAreaData.color}
          selectedName={activeAreaData.name}
          type={activeAreaData.palette}
          index={activeIndex}
          onChangeColor={props.onChangeColor}
        />
      </div>
    </div>
  )
}

Colors.defaultProps = {
  colors: [
    {
      name: 'ベース',
      color: '#ffffff',
      colorName: 'ホワイト',
      palette: PALETTE_TYPES.NORMAL,
    },
  ],
}

export default Colors
