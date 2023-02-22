import React, { useCallback, useState } from 'react'
import classnames from 'classnames'

import { Palette, PALETTE_TYPES } from './Palette'

import styles from './styles/colors.module.scss'

export { PALETTE_TYPES }

export const Colors = (props) => {
  const { data } = props
  const [activeIndex, setActiveIndex] = useState(0)
  const onClickArea = useCallback(
    (index) => {
      setActiveIndex(index)
    },
    [setActiveIndex],
  )
  const activeAreaData = data[activeIndex]
  return (
    <div className={styles.main}>
      <div className={styles.area}>
        {data.map((item, index) => {
          const { name, color } = item
          return (
            <div
              className={styles.areaItem}
              key={`${color}::${index}`}
              onClick={onClickArea.bind(null, index)}
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
          colorName={activeAreaData.colorName}
          index={activeIndex}
          onChangeColor={props.onChangeColor}
        />
      </div>
    </div>
  )
}

Colors.defaultProps = {
  data: [
    {
      name: 'ベース',
      color: '#ffffff',
      colorName: 'ホワイト',
      palette: PALETTE_TYPES.NORMAL,
    },
  ],
}

export default Colors
