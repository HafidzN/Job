import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { updateJob } from "../actions/index.js"
import Img from './Img'
import './Home.scss'

function Home () {
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobReducers)
    const [appliedJobs, setAppliedJobs] = useState([])

    const updateApplication = (payload) => {
      dispatch(updateJob({
        ...payload,
        applied: !payload.applied
      }))
    }
    
    useEffect(() => {
      if (jobs.length > 0) {
        const updatedJobs = jobs.filter(job => job.applied) || []
        setAppliedJobs(updatedJobs)
      }

    }, [jobs])

    return (
      <div className=''>
        <div className='' style={{padding: '2rem'}}>
          <h1 className="main__title">Lamaran Terkirim:</h1>
          <section className='section'>
            <ul className='home__container'>
              {
                appliedJobs.length > 0 ? appliedJobs.map(job => (
                  <li key={job.jobVacancyCode} className="home__list">
                    <div className="home__box">
                        <div className="home_pinned">
                          <div className="home__photo">
                            <Img corporateLogo={job.corporateLogo} corporateName={job.corporateName} />
                          </div>
                          <div className="home__title">
                            <div className="home__main-title">
                              <span className="home__link-1">{job.corporateName || ''}</span>
                              <span className="home__span"></span>
                              <span className="home__status">{job.positionName || ''}</span>
                            </div>
                          </div>
  
                          <p className="home__contractdesc">
                            status: {job.status || ''}
                          </p>
  
                          <p className="home__salaries">
                            Gaji: 
                            <span href="/#"className="home__star">
                              {job.salaryFrom || 0} - {job.salaryTo || 0}
                            </span>
                          </p>
  
                          <div className="h-text-align-right h-fs-12">
                            {job.postedDate || ''}
                          </div>
  
                          <Link to={`/lowongan/detail/${job.jobVacancyCode}`} className="home__link-2" style={{ marginLeft: 'auto'}}>
                            Baca Detail
                          </Link>
                          
                          <div>
                            <button className="cancel-application" onClick={() => updateApplication(job)}>{job.applied? "Batalkan Lamaran" : "Kirim Lamaran"}</button>
                          </div>
  
                        </div>
                    </div>
                  </li>
                )) 
                : <div>Belum ada lamaran terkirim</div>
              }
            </ul>
          </section>
        </div>
      </div>
    )
}

export default Home
