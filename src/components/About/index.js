import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import FaqItem from '../FaqItem'
import './index.css'

class About extends Component {
  state = {isLoading: true, faqData: []}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'
    /* const options = {method: 'GET'} */

    const response = await fetch(url)
    const data = await response.json()
    const {faq} = data
    this.setState({isLoading: false, faqData: faq})
  }

  renderLoadingView = () => (
    <div className=" loader-container" testid="aboutRouteLoader">
      <Loader type="Oval" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderFaqs = () => {
    const {faqData} = this.state
    return (
      <>
        <ul className="faqs-list" testid="faqsUnorderedList">
          {faqData.map(obj => (
            <FaqItem
              key={obj.qno}
              answer={obj.answer}
              question={obj.question}
            />
          ))}
        </ul>
      </>
    )
  }

  renderAboutView = () => (
    <>
      <div className="about-content-container">
        <h1 className="about-title">About</h1>
        <p className="about-last-update-time">
          Last update on march 28th 2021.
        </p>
        <p className="about-sub-title">
          COVID-19 vaccines be ready for distribution
        </p>
        <div className="faq-list-container">{this.renderFaqs()}</div>
      </div>
      <Footer />
    </>
  )

  render() {
    const {isLoading} = this.state
    return (
      <>
        <Header />
        <div className="about-bg-container">
          {isLoading ? this.renderLoadingView() : this.renderAboutView()}
        </div>
      </>
    )
  }
}

export default About
