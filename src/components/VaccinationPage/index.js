import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const VaccinationPage = () => (
  <>
    <Header />
    <div className="vaccination-page-main-bg">
      <div className="about-content-container">
        <h1 className="about-title">Vaccination</h1>
        <p className="about-description">Last update on January 2024.</p>
        <p className="about-vaccine-title">All Details About COVID-19</p>
        <p className="about-vaccine-title">
          Sorry, This page is Under Construction
        </p>
      </div>{' '}
      <Link to="/">
        <button className="not-found-button" type="button">
          Home
        </button>
      </Link>
    </div>

    <Footer />
  </>
)

export default VaccinationPage
