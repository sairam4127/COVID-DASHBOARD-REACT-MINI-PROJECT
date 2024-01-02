import {Link} from 'react-router-dom'

import './index.css'

const NavItem = props => {
  const {activePath, routeDetails} = props
  const {routeId, path} = routeDetails
  /* const CallSelectTabFunc = () => {
    selectTabFunc(routeId)
  } */
  const highlightRoute = activePath === path ? 'highlight-item' : ''

  return (
    <li className={`item ${highlightRoute}`}>
      <Link to={path} className="link">
        <button className={`nav-route-btn ${highlightRoute}`} type="button">
          {routeId}
        </button>
      </Link>
    </li>
  )
}
export default NavItem
