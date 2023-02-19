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
  {
    name: 'ホワイト（濃）',
    color: '#d3d3d4',
  },
  {
    name: 'ハイライズ（薄）',
    color: '#b4bfc5',
  },
  {
    name: 'ハイライズ',
    color: '#98a2a7',
  },
  {
    name: 'ハイライズ（濃）',
    color: '#7d8589',
  },
  {
    name: 'グレー（薄）',
    color: '#8f8f8e',
  },
  {
    name: 'グレー',
    color: '#6e6e6d',
  },
  {
    name: 'グレー（濃）',
    color: '#4c4c4b',
  },
  {
    name: 'グラファイト（薄）',
    color: '#6c6b7f',
  },
  {
    name: 'グラファイト',
    color: '#474653',
  },
  {
    name: 'グラファイト（濃）',
    color: '#2c2b33',
  },
  {
    name: 'ブラック（薄）',
    color: '#4c4948',
  },
  {
    name: 'ブラック',
    color: '#000000',
  },
  {
    name: 'ゴールド（薄）',
    color: '#bda500',
  },
  {
    name: 'ゴールド',
    color: '#998600',
  },
  {
    name: 'ゴールド（濃）',
    color: '#817100',
  },
  {
    name: 'バーガンディー（薄）',
    color: '#a75155',
  },
  {
    name: 'バーガンディー',
    color: '#893640',
  },
  {
    name: 'バーガンディー（濃）',
    color: '#6d2830',
  },
  {
    name: 'レッド（薄）',
    color: '#ec4049',
  },
  {
    name: 'レッド',
    color: '#c1343c',
  },
  {
    name: 'レッド（濃）',
    color: '#9c2a30',
  },
  {
    name: 'マゼンダ（薄）',
    color: '#d16498',
  },
  {
    name: 'マゼンダ',
    color: '#bf4a83',
  },
  {
    name: 'マゼンダ（濃）',
    color: '#973b68',
  },
  {
    name: 'ローズピンク（薄）',
    color: '#f095b8',
  },
  {
    name: 'ローズピンク',
    color: '#dd799c',
  },
  {
    name: 'ローズピンク（濃）',
    color: '#ae5f7b',
  },
  {
    name: 'エンバーグロウ（薄）',
    color: '#ed8276',
  },
  {
    name: 'エンバーグロウ',
    color: '#db695f',
  },
  {
    name: 'エンバーグロウ（濃）',
    color: '#b2564d',
  },
  {
    name: 'オレンジ（薄）',
    color: '#ff8b5b',
  },
  {
    name: 'オレンジ',
    color: '#ed703c',
  },
  {
    name: 'オレンジ（濃）',
    color: '#bf5a30',
  },
  {
    name: 'イエロー（薄）',
    color: '#fff693',
  },
  {
    name: 'イエロー',
    color: '#ecde46',
  },
  {
    name: 'イエロー（濃）',
    color: '#aea434',
  },
  {
    name: 'アシッドライム（薄）',
    color: '#d3f363',
  },
  {
    name: 'アシッドライム',
    color: '#b5d349',
  },
  {
    name: 'アシッドライム（濃）',
    color: '#8da439',
  },
  {
    name: 'グリーン（薄）',
    color: '#459f62',
  },
  {
    name: 'グリーン',
    color: '#0c8d51',
  },
  {
    name: 'グリーン（濃）',
    color: '#017542',
  },
  {
    name: 'ネイビー（薄）',
    color: '#56617c',
  },
  {
    name: 'ネイビー',
    color: '#353c4d',
  },
  {
    name: 'ネイビー（濃）',
    color: '#1e2639',
  },
  {
    name: 'ブルー（薄）',
    color: '#5067a5',
  },
  {
    name: 'ブルー',
    color: '#355590',
  },
  {
    name: 'ブルー（濃）',
    color: '#253c66',
  },
  {
    name: 'ロイヤルブルー（薄）',
    color: '#5f5d9b',
  },
  {
    name: 'ロイヤルブルー',
    color: '#484b87',
  },
  {
    name: 'ロイヤルブルー（濃）',
    color: '#3b3d71',
  },
  {
    name: 'レイクブルー（薄）',
    color: '#429dac',
  },
  {
    name: 'レイクブルー',
    color: '#058893',
  },
  {
    name: 'レイクブルー（濃）',
    color: '#046d76',
  },
  {
    name: 'サックスブルー（薄）',
    color: '#52b0d6',
  },
  {
    name: 'サックスブルー',
    color: '#289abb',
  },
  {
    name: 'サックスブルー（濃）',
    color: '#217e99',
  },
  {
    name: 'アクアスカイ（薄）',
    color: '#c7f3ff',
  },
  {
    name: 'アクアスカイ',
    color: '#a8cdd7',
  },
  {
    name: 'アクアスカイ（濃）',
    color: '#829ea6',
  },
  {
    name: 'パープル（薄）',
    color: '#9762a6',
  },
  {
    name: 'パープル',
    color: '#904a7d',
  },
  {
    name: 'パープル（濃）',
    color: '#5e3b68',
  },
]

export default Palette
