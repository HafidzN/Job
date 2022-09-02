import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getListJobs } from "../actions/index.js"
import db from "../db.json"
// import noimg from "../assets/no-img.jpg"
import './Home.scss'

function Home () {
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.githubReducers)


    useEffect(() => {
      dispatch(getListJobs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

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
        Lamaran Terkirim:
        <hr />
        <section className='section'>
          <ul className='home__container'>
            {
              jobs && jobs.map(job => (
                <li key={job.jobVacancyCode} className="home__list">
                  <div className="home__box">
                      <div className="home_pinned">
                        <div className="home__photo">
                          <img src={job.corporateLogo} alt={job.corporateName} />
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

                        <a href="/#"className="home__link-2">
                            Baca Detail
                        </a>
                        
                        <div>
                          <button className="cancel-apply">Batalkan Lamaran</button>
                        </div>

                      </div>
                  </div>
                </li>
              ))
            }
            { !jobs &&
             <div>
               <p>
                 Belum ada lamaran yang terkirim.
               </p>
                <Link to={'/'} className="" >
                  <button>
                        kembali ke home
                  </button>
                </Link>
             </div>
            }
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
