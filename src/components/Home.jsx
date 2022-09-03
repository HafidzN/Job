import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getListJobs, updateJob } from "../actions/index.js"
// import noimg from "../assets/no-img.jpg"
import './Home.scss'

function Home () {
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobReducers)


    useEffect(() => {
      if (jobs.length === 0) dispatch(getListJobs())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const updateApplication = (payload) => {
      dispatch(updateJob({
        ...payload,
        applied: !payload.applied
      }))
    }
    

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
          <Link to={'/lamaran-terkirim'} className="home__link-2" style={{ marginLeft: '2rem'}}>
          Lamaran Terkirim</Link>
      </section>
        Lowongan Pekerjaan:
        <hr />
        <section className='section'>
          <ul className='home__container'>
            {
              (jobs || []).map(job => (
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

                        <Link to={`/lowongan/detail/${job.jobVacancyCode}`} className="home__link-2" style={{ marginLeft: 'auto'}}>
                          Baca Detail
                        </Link>
                        
                        <div>
                          <button className={job.applied? "" : "not-applied"} onClick={() => updateApplication(job)}>{job.applied? "Batalkan Lamaran" : "Kirim Lamaran"}</button>
                        </div>

                      </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Home
