import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Home'
import Simulator from '../Simulator'

import './styles/index.module.scss'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
