import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getListJobs, updateJob } from "../actions/index.js"
import { useParams } from "react-router-dom";
import Img from './Img'
import util from '../helpers/timeDifference'

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

  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobReducers)

  const { jobVacancyCode } = useParams()

  useEffect(() => {
    if (jobs.length === 0) dispatch(getListJobs())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (jobs.length > 0) setCurrentJob(jobs.find(job => job.jobVacancyCode === jobVacancyCode))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobs])


  const updateApplication = (payload) => {
    dispatch(updateJob({
      ...payload,
      applied: !payload.applied
    }))
  }
   

  return (
    <div className=''>
      <div className='' style={{padding: '2rem'}}>
        <div className="main__title">
          Detail Lowongan Pekerjaan:  
        </div>
        <section className='section'>
          <div className="detail__logo">
            <Img corporateLogo={currentJob.corporateLogo} corporateName={currentJob.corporateName} />
          </div>
          <div className="detail__company-name">{currentJob.corporateName}</div>
          <p>Kewajiban:</p>
          <div className="detail__desc" dangerouslySetInnerHTML={{ __html: currentJob.descriptions }}></div>
          <div className="detail__job-name">{currentJob.positionName}</div>
          <div className="h-flex">
            <div>Status</div>
            <div className="detail__bold">{currentJob.status}</div>
          </div>
          <div className="h-flex">
            <div>Gaji</div>
            <div className="detail__bold">{currentJob.salaryFrom} - {currentJob.salaryTo}</div>
          </div>
          <div className="detail__posted-date">{currentJob.postedDate ? util.timeDiff(currentJob.postedDate): ''}</div>
          <div>
            <button className={currentJob.applied? "" : "not-applied"} onClick={() => updateApplication(currentJob)}>{currentJob.applied? "Batalkan Lamaran" : "Kirim Lamaran"}</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Detail
