import React from 'react'
import classnames from 'classnames'

import { OBJECT_ICONS } from './icons'
import styles from './styles/category.module.scss'

export class Category extends React.Component {
  category = [
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
  render = () => {
    return (
      <>
        <h1 className={styles.title}>カスタマイズするアイテムを選ぶ</h1>
        <div className={styles.content}>{this.renderCategory()}</div>
      </>
    )
  }
  renderCategory = () => {
    const { changeCategory } = this.props
    return this.category.map((item) => {
      const { id, label, icon, hasCompleted, name } = item
      const itemCls = classnames(styles.item, {
        [styles.badgeOk]: hasCompleted,
      })
      return (
        <div className={itemCls} key={id} onClick={() => changeCategory(name)}>
          <img className={styles.icon} src={icon} alt={label} />
          <label className={styles.label}>{label}</label>
        </div>
      )
    })
  }
}

export default Category
