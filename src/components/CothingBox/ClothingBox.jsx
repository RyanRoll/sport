import React from 'react'
import classnames from 'classnames'

import { OBJECT_ICONS } from './icons'
import styles from './styles/index.module.scss'

export class ClothingBox extends React.Component {
  objects = [
    {
      name: 't-shirt',
      id: 0,
      label: 'シャツ',
      hasCompleted: false,
      icon: OBJECT_ICONS[0],
    },
    {
      name: 'pants',
      id: 1,
      label: 'パンツ',
      hasCompleted: false,
      icon: OBJECT_ICONS[1],
    },
    {
      name: 'socks',
      id: 2,
      label: 'ソックス',
      hasCompleted: false,
      icon: OBJECT_ICONS[2],
    },
    {
      name: 'team-name',
      id: 3,
      label: 'チーム名',
      hasCompleted: false,
      icon: OBJECT_ICONS[3],
    },
    {
      name: 'number',
      id: 4,
      label: '番号',
      hasCompleted: false,
      icon: OBJECT_ICONS[4],
    },
    {
      name: 'name',
      id: 5,
      label: '番背・個人名号',
      hasCompleted: false,
      icon: OBJECT_ICONS[5],
    },
    {
      name: 'badge',
      id: 6,
      label: 'エンブレム',
      hasCompleted: false,
      icon: OBJECT_ICONS[6],
    },
  ]
  renderObjects = () => {
    return this.objects.map((item) => {
      const { id, label, icon, hasCompleted } = item
      const itemCls = classnames(styles.item, {
        [styles.badgeOk]: hasCompleted,
      })
      return (
        <div className={itemCls} key={id}>
          <img className={styles.icon} src={icon} alt={label} />
          <label className={styles.label}>{label}</label>
        </div>
      )
    })
  }
  render() {
    return (
      <div className={styles.box}>
        <h1 className={styles.title}>カスタマイズするアイテムを選ぶ</h1>
        <div className={styles.content}>{this.renderObjects()}</div>
      </div>
    )
  }
}

export default ClothingBox
