import { Link } from 'react-router-dom'

import './Home.scss'

function Home () {
   

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
          <div className="detail__company-name">Sinar Mas</div>
          <p>Kewajiban:</p>
          <div className="detail__desc">raw html</div>
          <div className="detail__job-name">Accounting</div>
          <div className="h-flex">
            <div>Status</div>
            <div className="detail__bold">Karyawan Tetap</div>
          </div>
          <div className="h-flex">
            <div>Gaji</div>
            <div className="detail__bold">10.000.000 - 20.000.000</div>
          </div>
          <div className="detail__posted-date">29 days ago</div>
          <button>Kirim Lamaran</button>
        </section>
      </div>
    </div>
  )
}

export default Home
