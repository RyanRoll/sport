import React from 'react'

import Category from './Category'
import Pants from './Pants'
import TeamName from './TeamName'

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
      case 'team-name':
        return <TeamName changeCategory={this.changeCategory} />
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
