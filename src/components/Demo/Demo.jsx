import React from 'react'

import ClothingBox from '../CothingBox'
import DemoContext from './context'

import styles from './styles/demo.module.scss'

export class Demo extends React.Component {
  state = {
    skinData: {
      pants: {},
      teamName: {},
      number: {},
      nameperson: {},
      badge: {},
      socks: {},
    },
  }
  constructor(props) {
    super(props)
    this.contextData = {
      skinData: this.state.skinData,
      setSkinData: this.setSkinData,
    }
  }
  setSkinData = (newSkinData) => {
    this.contextData.skinData = newSkinData
    this.setState({
      skinData: newSkinData,
    })
  }
  render() {
    return (
      <DemoContext.Provider value={this.contextData}>
        <div className={styles.demo}>
          <ClothingBox />
        </div>
      </DemoContext.Provider>
    )
  }
}

export default Demo
