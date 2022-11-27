import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

export class Simulator extends React.Component {
  render() {
    return (
      <>
        <Header type="small" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/">Go back to Home</Link>
      </>
    )
  }
}

export default Simulator
