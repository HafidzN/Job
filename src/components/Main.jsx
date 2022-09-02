import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Sent from './Sent'

class Main extends Component {
  render() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/buat-lowongan-pekerjaan" element={<Create/>}/>
            <Route exact path="/lamaran-terkirim" element={<Sent/>}/>
        </Routes>
    )
  }
}

export default Main