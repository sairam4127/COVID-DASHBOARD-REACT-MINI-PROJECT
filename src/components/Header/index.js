import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {ImMenu2} from 'react-icons/im'

import './index.css'

import NavItem from '../NavItem'

const RoutesData = [
  {routeId: 'Home', path: '/'},
  {routeId: 'About', path: '/about'},
  {routeId: 'Vaccination', path: '/vaccination'},
]

class Header extends Component {
  state = {isToggleActive: false, activePath: '/'}

  componentDidMount() {
    this.selectTabFunc()
  }

  showDropDownMenuFunc = () => {
    this.setState(prevState => ({isToggleActive: !prevState.isToggleActive}))
  }

  selectTabFunc = () => {
    const {match} = this.props
    const {path} = match

    if (path === '/about' || path === '/vaccination') {
      this.setState({activePath: path})
    } else {
      this.setState({activePath: '/'})
    }

    /*  console.log(match, 'header')
   this.setState({activeTabId: id}) */
  }

  RenderDropDownMenu = () => {
    const {activePath} = this.state
    return (
      <ul className="navBar">
        {RoutesData.map(obj => (
          <NavItem
            activePath={activePath}
            routeDetails={obj}
            key={obj.routeId}
            selectTabFunc={this.selectTabFunc}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isToggleActive, activePath} = this.state
    /* <span className="india"> </span> <span className="india"> </span> */
    return (
      <>
        <div className="desktop-header-container">
          <Link to="/" className="link">
            <p className="logo">
              COVID19<span className="india">INDIA</span>
            </p>
          </Link>

          <ul className="navBar">
            {RoutesData.map(obj => (
              <NavItem
                activePath={activePath}
                key={obj.routeId}
                routeDetails={obj}
                selectTabFunc={this.selectTabFunc}
              />
            ))}
          </ul>
        </div>
        <div className="mobile-menu">
          <div className="mobile-header-container">
            <li className="mobile-header-item">
              <Link to="/" className="link">
                <p className="logo">
                  COVID19<span className="india">INDIA</span>
                </p>
              </Link>
            </li>
            <li className="mobile-header-item">
              <button
                type="button"
                className="toggle-button"
                onClick={this.showDropDownMenuFunc}
              >
                <ImMenu2 className="menuIcon" alt="menu" />
              </button>
            </li>
          </div>
          <div className="menu">
            {isToggleActive ? this.RenderDropDownMenu() : null}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Header)
