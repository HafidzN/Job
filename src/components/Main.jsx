import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Sent from './Sent'
import Detail from './Detail'

class Main extends Component {
  render() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/buat-lowongan-pekerjaan" element={<Create/>}/>
            <Route exact path="/lamaran-terkirim" element={<Sent/>}/>
            <Route exact path="/lowongan/detail/:jobVacancyCode" element={<Detail/>}/>
        </Routes>
    )
  }
}

export default Main