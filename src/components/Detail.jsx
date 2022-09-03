import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  findJobById
} from "../actions/index"
import { Link } from 'react-router-dom'

import './Detail.scss'

function Detail () {
  const initialJobState = {
    applied: false,
    corporateId: '',
    corporateLogo:'',
    corporateName: '',
    descriptions: '',
    jobVacancyCode: '',
    positionName: '',
    postedDate: '',
    salaryFrom: 0,
    salaryTo: 0,
    status: ''
}
  const [currentJob, setCurrentJob] = useState(initialJobState)
   

  return (
    <div className=''>
      <div className='' style={{padding: '2rem'}}>
      <section className='section h-flex'>
          <div className="">
            <Link to={'/'} className="home__main-logo" >
              KLOB</Link>
          </div>
          <Link to={'/buat-lowongan-pekerjaan'} className="home__link-2" style={{ marginLeft: 'auto'}}>
            Buat Lowongan</Link>
      </section>
        Detail Lowongan Pekerjaan:
        <hr />
        <section className='section'>
          <div className="detail__logo">
            <img src="" alt="" />
          </div>
          <div className="detail__company-name">{currentJob.corporateName}</div>
          <p>Kewajiban:</p>
          <div className="detail__desc">{currentJob.descriptions}</div>
          <div className="detail__job-name">{currentJob.positionName}</div>
          <div className="h-flex">
            <div>Status</div>
            <div className="detail__bold">{currentJob.status}</div>
          </div>
          <div className="h-flex">
            <div>Gaji</div>
            <div className="detail__bold">{currentJob.salaryFrom} - {currentJob.salaryTo}</div>
          </div>
          <div className="detail__posted-date">{currentJob.postedDate}</div>
          <button>Kirim Lamaran</button>
        </section>
      </div>
    </div>
  )
}

export default Detail
