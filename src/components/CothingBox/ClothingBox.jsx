import React from 'react'

import Category from './Category'
import Pants from './Pants'
import Socks from './Socks'
import TeamName from './TeamName'
import Number from './Number'
import NamePerson from './NamePerson'
import Badge from './Badge'

import styles from './styles/clothingBox.module.scss'

export class ClothingBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: props.category,
    }
  }
  render() {
    return <div className={styles.box}>{this.renderPanels()}</div>
  }
  renderPanels = () => {
    const { category } = this.state
    switch (category) {
      case 't-shirt':
        break
      case 'pants':
        return <Pants changeCategory={this.changeCategory} />
      case 'socks':
        return <Socks changeCategory={this.changeCategory} />
      case 'teamName':
        return <TeamName changeCategory={this.changeCategory} />
      case 'number':
        return <Number changeCategory={this.changeCategory} />
      case 'nameperson':
        return <NamePerson changeCategory={this.changeCategory} />
      case 'badge':
        return <Badge changeCategory={this.changeCategory} />
      case 'menu':
      default:
        return <Category changeCategory={this.changeCategory} />
    }
  }
  changeCategory = (category) => {
    this.setState({
      category,
    })
  }
}

ClothingBox.defaultProps = {
  category: 'menu',
}

export default ClothingBox
