import React, { useCallback } from 'react'
import classnames from 'classnames'

import styles from './styles/palette.module.scss'

export const Palette = (props) => {
  const { type, selectedColor, selectedName, onChangeColor, index } = props
  let colorsData = PALETTE_NORMAL
  switch (type) {
    case PALETTE_TYPES.NORMAL:
      colorsData = PALETTE_NORMAL
      break

    case PALETTE_TYPES.ADVANCED:
    default:
      colorsData = PALETTE_ADVANCED
      break
  }

  const onClickColor = useCallback(
    (color, name) => {
      onChangeColor?.(color, name, index)
    },
    [index, onChangeColor],
  )

  return (
    <div className={styles.palette}>
      <div className={styles.majorColor}>
        <div
          className={styles.color}
          style={{ background: selectedColor }}
        ></div>
        <div className={styles.text}>
          <div>{selectedColor}</div>
          <div>{selectedName}</div>
        </div>
      </div>
      <div className={styles.colors}>
        {colorsData.map(({ name, color }) => {
          return (
            <span
              className={classnames(styles.color, {
                [styles.selected]: color === selectedColor,
              })}
              style={{ background: color }}
              title={name}
              key={color}
              onClick={onClickColor.bind(null, color, name)}
            ></span>
          )
        })}
      </div>
    </div>
  )
}

export const PALETTE_TYPES = {
  NORMAL: 'normal',
  ADVANCED: 'advanced',
}

export const PALETTE_NORMAL = [
  {
    name: 'ホワイト',
    color: '#ffffff',
  },
  {
    name: 'ハイライズ',
    color: '#98a2a7',
  },
  {
    name: 'グレー',
    color: '#6e6e6d',
  },
  {
    name: 'グラファイト',
    color: '#474653',
  },
  {
    name: 'ブラック',
    color: '#000000',
  },
  {
    name: 'ゴールド',
    color: '#998600',
  },
  {
    name: 'バーガンディー',
    color: '#893640',
  },
  {
    name: 'レッド',
    color: '#c1343c',
  },
  {
    name: 'マゼンダ',
    color: '#bf4a83',
  },
  {
    name: 'ローズピンク',
    color: '#dd799c',
  },
  {
    name: 'エンバーグロウ',
    color: '#db695f',
  },
  {
    name: 'オレンジ',
    color: '#ed703c',
  },
  {
    name: 'イエロー',
    color: '#ecde46',
  },
  {
    name: 'アシッドライム',
    color: '#b5d349',
  },
  {
    name: 'グリーン',
    color: '#0c8d51',
  },
  {
    name: 'ネイビー',
    color: '#353c4d',
  },
  {
    name: 'ブルー',
    color: '#355590',
  },
  {
    name: 'ロイヤルブルー',
    color: '#484b87',
  },
  {
    name: 'レイクブルー',
    color: '#058893',
  },
  {
    name: 'サックスブルー',
    color: '#289abb',
  },
  {
    name: 'アクアスカイ',
    color: '#a8cdd7',
  },
  {
    name: 'パープル',
    color: '#904a7d',
  },
]

export const PALETTE_ADVANCED = [
  {
    name: 'ホワイト',
    color: '#ffffff',
  },
]

export default Palette
