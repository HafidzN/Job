import React, { Component } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Sent from './Sent'
import Detail from './Detail'
import klobIcon from '../assets/klobicon.svg'
import './Main.scss'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <nav className="main__nav h-flex h-items-center">
          <div className="main_logo">
            <Link to={'/'} className="" >
              <img src={klobIcon} alt="Klob" />
            </Link>
            </div>
          <div className="main__directions h-flex">
            <Link to={'/buat-lowongan-pekerjaan'} className="home__link-2" style={{ marginLeft: 'auto'}}>
                Buat Lowongan</Link>
              <Link to={'/lamaran-terkirim'} className="home__link-2" style={{ marginLeft: '2rem'}}>
              Lamaran Terkirim</Link>
          </div>
        </nav>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/buat-lowongan-pekerjaan" element={<Create/>}/>
            <Route exact path="/lamaran-terkirim" element={<Sent/>}/>
            <Route exact path="/lowongan/detail/:jobVacancyCode" element={<Detail/>}/>
        </Routes>
      </div>

    )
  }
}

export default Main