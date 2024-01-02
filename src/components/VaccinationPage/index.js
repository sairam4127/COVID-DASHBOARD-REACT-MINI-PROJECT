import './index.css'

import {Link} from 'react-router-dom'

const VaccinationPage = () => (
  <div className="notfound-page-container black-bg">
    <div className="notfound-page-content-container">
      <img
        src="https://res.cloudinary.com/dawykjhkh/image/upload/v1671202044/under-construction_tbg0v9.jpg"
        alt="not-found-pic"
        className="under-contruction-img"
      />

      <Link to="/">
        <button className="not-found-button" type="button">
          Home
        </button>
      </Link>
    </div>
  </div>
)

export default VaccinationPage
