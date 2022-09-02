import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './Home.scss'

function Create() {
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)
    const [values, setValues] = useState({
        companyLogo: '',
        companyName: '',
        jobName: '',
        jobStatus: '',
        salaryFrom: '',
        salaryTo: '',
        postedDate: ''
    })

    const handleInputChange =  (event) => {
        event.persist()
        setValues( values => ({...values, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(values.companyLogo && values.companyName && values.jobName && values.jobStatus && values.salaryFrom && values.salaryTo && values.postedDate) {
            setValid(true)
        }
        setSubmitted(true)
        console.log({values})
        if (valid) {}
    }

  return(
    <div className=''>
      <div className='' style={{padding: '2rem'}}>
        <section className='section h-flex'>
            <Link to={'/'} className="home__main-logo" >
              KLOB</Link>
            <Link to={'/buat-lowongan-pekerjaan'} className="home__link-2" style={{ marginLeft: 'auto'}}>
                Buat Lowongan
            </Link>
        </section>

        <h1>Buat Lowongan</h1>

        <form className="h-fs-12" style={{ marginTop: '2rem'}} onSubmit={handleSubmit}>
            <fieldset>
                <label>
                <p>Logo Perusahaan</p>
                <input
                    id="company-logo"
                    className="form-field"
                    type="text"
                    placeholder=""
                    name="companyLogo"
                    value={values.companyLogo}
                    onChange={handleInputChange}
                />
                </label>
                {submitted && !values.companyLogo && <div className="error">Please enter a company logo</div>}
            </fieldset>
            <fieldset>
                <label>
                <p>Nama Perusahaan</p>
                <input
                    id="company-name"
                    className="form-field"
                    type="text"
                    placeholder=""
                    name="companyName"
                    value={values.companyName}
                    onChange={handleInputChange}
                />
                </label>
                {submitted && !values.companyName && <div className="error">Please enter a company name</div>}
            </fieldset>
            <fieldset>
                <label>
                <p> Nama Lowongan</p>
                <input
                    id="job-name"
                    className="form-field"
                    type="text"
                    placeholder=""
                    name="jobName"
                    value={values.jobName}
                    onChange={handleInputChange}
                />
                </label>
                {submitted && !values.jobName && <div className="error">Please enter a jobName</div>}
            </fieldset>
            <fieldset>
                <label>
                <p>Status Karyawan</p>
                <input
                    id="job-status"
                    className="form-field"
                    type="text"
                    placeholder=""
                    name="jobStatus"
                    value={values.jobStatus}
                    onChange={handleInputChange}
                />
                </label>
                {submitted && !values.jobStatus && <div className="error">Please enter a jobStatus</div>}
            </fieldset>
            <fieldset>
                <label>
                <p>Kisaran Gaji Karyawan</p>
                <div className="h-flex">
                    <input
                        id="job-salary-from"
                        className="form-field"
                        type="text"
                        placeholder=""
                        name="salaryFrom"
                        value={values.salaryFrom}
                        onChange={handleInputChange}
                    />
                        <div>Sampai Dengan: </div>
                        <input
                        id="job-salary-to"
                        className="form-field"
                        type="text"
                        placeholder=""
                        name="salaryTo"
                        value={values.salaryTo}
                        onChange={handleInputChange}
                    />
                </div>
                </label>
                {submitted && (!values.salaryFrom || !values.salaryTo) && <div className="error">Please enter valid salary range</div>}
            </fieldset>
            <fieldset>
                <label>
                <p>Tanggal Posting</p>
                <input
                    id="job-status"
                    className="form-field"
                    type="date"
                    placeholder=""
                    name="postedDate"
                    value={values.postedDate}
                    onChange={handleInputChange}
                />
                </label>
                {submitted && !values.postedDate && <div className="error">Please enter a postedDate</div>}
            </fieldset>
            <button type="submit" style={{ marginTop: '2rem'}}>Simpan</button>
        </form>
       </div>
    </div>
  )
}

export default Create