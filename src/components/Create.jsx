import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { createJob } from "../actions/index"
import './Home.scss'

function Create() {
    const initialJobState = {
        corporateLogo: '',
        corporateName: '',
        positionName: '',
        status: '',
        salaryFrom: '',
        salaryTo: '',
        postedDate: ''
    }
    const dispatch = useDispatch()
    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)
    const [values, setValues] = useState(initialJobState)
    const [dirty, setDirty] = useState(false)

    const handleInputChange =  (event) => {
        event.persist()
        setValues( values => ({...values, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) => {
        setDirty(true)
        event.preventDefault()
        if(    values.corporateLogo 
            && values.corporateName 
            && values.positionName 
            && values.status 
            && values.salaryFrom 
            && values.salaryTo 
            && values.postedDate) {
            setValid(true)
        }
        if (valid) saveTutorial()
    }

    const saveTutorial = () => {
        const payload = {
            applied: false,
            corporateId: generateString(9),
            corporateLogo: values.corporateLogo,
            corporateName: values.corporateName,
            descriptions: "<ul>\n<li>Melakukan proses penerimaan karyawan dari proses Screening sampai Recruiting</li>\n<li>Memperbaharui dan memelihara database, catatan, dan laporan SDM dengan data karyawan yang akurat</li>\n<li>Mempersiapkan kontrak kerja untuk karyawan baru perusahaan</li>\n<li>Melakukan penyusunan absensi atau daftar hadit karyawan perusahaan</li>\n<li>Memperisapkan berbagai macam internal letter dan outgoing letter</li>\n<li>Mempersiapkan segala kebutuhan karyawan</li>\n<li>Melakukan sosialisasi dan koordinasi terhadap seluruh karyawan</li>\n</ul> <p>If you desire to be part of something special, to be part of a winning team, to be part of a fun team - winning is fun.  We are looking forward to Project Manager in CIMB Niaga, based in Jakarta, Indonesia. In CIMB Niaga, making our work exciting, engaging, meaningful; ensuring safety, health, wellness; and being a model of inclusion & diversity are already embedded in who we are - it’s in our values, part of our vision, and our clearly defined aspirational goals. The primary function of the job is managing all the project implementation and services within the country<p/>",
            jobVacancyCode: generateString(12),
            positionName: values.positionName,
            postedDate: values.postedDate,
            salaryFrom: (+values.salaryFrom),
            salaryTo: (+values.salaryTo),
            status: values.status
        }

        dispatch(createJob(payload))
          .then(data => {
            setValues({
                corporateLogo: data.corporateLogo,
                corporateName: data.corporateName,
                positionName: data.positionName,
                status: data.status,
                salaryFrom: data.salaryFrom,
                salaryTo: data.salaryTo,
                postedDate: data.postedDate
            })
            setSubmitted(true)
            console.log(data)
          })
          .catch(e => {
            console.error(e)
          })
    }

    const newJob = () => {
        setValues(initialJobState)
        setSubmitted(false)
      }

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const generateString = (length) => {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result
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

        {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="" onClick={newJob}>
            Add
          </button>
        </div>
        ) : (
            <form className="h-fs-12" style={{ marginTop: '2rem'}} onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                    <p>Logo Perusahaan</p>
                    <input
                        id="company-logo"
                        className="form-field"
                        type="text"
                        placeholder=""
                        name="corporateLogo"
                        value={values.corporateLogo}
                        onChange={handleInputChange}
                    />
                    </label>
                    {dirty && !values.corporateLogo && <div className="error">Please enter a company logo</div>}
                </fieldset>
                <fieldset>
                    <label>
                    <p>Nama Perusahaan</p>
                    <input
                        id="company-name"
                        className="form-field"
                        type="text"
                        placeholder=""
                        name="corporateName"
                        value={values.corporateName}
                        onChange={handleInputChange}
                    />
                    </label>
                    {dirty && !values.corporateName && <div className="error">Please enter a company name</div>}
                </fieldset>
                <fieldset>
                    <label>
                    <p> Nama Lowongan</p>
                    <input
                        id="job-name"
                        className="form-field"
                        type="text"
                        placeholder=""
                        name="positionName"
                        value={values.positionName}
                        onChange={handleInputChange}
                    />
                    </label>
                    {dirty && !values.positionName && <div className="error">Please enter a positionName</div>}
                </fieldset>
                <fieldset>
                    <label>
                    <p>Status Karyawan</p>
                    <input
                        id="job-status"
                        className="form-field"
                        type="text"
                        placeholder=""
                        name="status"
                        value={values.status}
                        onChange={handleInputChange}
                    />
                    </label>
                    {dirty && !values.status && <div className="error">Please enter a status</div>}
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
                    {dirty && (!values.salaryFrom || !values.salaryTo) && <div className="error">Please enter valid salary range</div>}
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
                    {dirty && !values.postedDate && <div className="error">Please enter a postedDate</div>}
                </fieldset>
                <button type="submit" style={{ marginTop: '2rem'}}>Simpan</button>
            </form>
        )
        }

       </div>
    </div>
  )
}

export default Create