import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-bg-container">
    <div className="footer-main-container">
      <h1 className="footer-heading">
        COVID19<span className="footer-heading-part-2 ">INDIA</span>
      </h1>
      <p className="footer-description">
        we stand with everyone fighting on the front lines
      </p>
      <div className="footer-icons-container">
        <a
          href="https://github.com/SaiTejaPolisetty/covid-19Dashboard-React-Mini-Project-"
          title="view code of this project"
          target="_blank"
          rel="noreferrer"
        >
          {}
          <VscGithubAlt fontSize="46" color="#CBD5E1" />
        </a>
        <a
          href="https://www.instagram.com/mohfwindia/"
          target="_blank"
          rel="noreferrer"
          title="ministry of health official instagram handle"
        >
          {}
          <FiInstagram fontSize="46" color="#CBD5E1" />
        </a>
        <a
          href="https://twitter.com/mohfw_india"
          title="ministry of health official twitter handle"
          target="_blank"
          rel="noreferrer"
        >
          {}
          <FaTwitter fontSize="46" color="#CBD5E1" />
        </a>
      </div>
    </div>
  </div>
)

export default Footer
