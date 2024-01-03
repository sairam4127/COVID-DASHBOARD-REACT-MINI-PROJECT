import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import Footer from '../Footer'
import StateStatsItem from '../StateStatsColumn'

import SearchSuggestionsItem from '../SearchSuggestionsItem'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    isLoading: true,
    totalActiveCases: 0,
    totalConfirmedCases: 0,
    totalRecoveredCases: 0,
    totalDeceasedCases: 0,
    searchInput: '',
    filteredSearchSuggestions: [],
    stateWiseStats: [],
  }

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    /* const options = {
      method: 'GET',
    } */
    const response = await fetch(apiUrl)
    if (response.ok === true) {
      /*  console.log(response) */
      const data = await response.json()
      /* console.log(data) */
      let nationalWideConfirmedCases = 0
      let nationalWideRecoveredCases = 0
      let nationalWideDeceasedCases = 0
      let nationalWideActiveCases = 0

      statesList.forEach(state => {
        if (data[state.state_code]) {
          const {total} = data[state.state_code]
          nationalWideConfirmedCases += total.confirmed ? total.confirmed : 0
          nationalWideDeceasedCases += total.deceased ? total.deceased : 0
          nationalWideRecoveredCases += total.recovered ? total.recovered : 0
        }
      })
      nationalWideActiveCases +=
        nationalWideConfirmedCases -
        (nationalWideRecoveredCases + nationalWideDeceasedCases)

      const stats = statesList.map(eachState => ({
        stateName: eachState.state_name,
        stateCode: eachState.state_code,
        confirmed: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(stateCode => data[stateCode].total.confirmed),
        recovered: Object.keys(data)
          .filter(state => eachState.state_code === state)
          .map(stateCode => data[stateCode].total.recovered),
        deceased: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(stateCode => data[stateCode].total.deceased),
        other: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(stateCode => data[stateCode].total.other),
        population: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(stateCode => data[stateCode].meta.population),
      }))

      /* console.log(states) */

      this.setState({
        totalActiveCases: nationalWideActiveCases,
        totalRecoveredCases: nationalWideRecoveredCases,
        totalDeceasedCases: nationalWideDeceasedCases,
        totalConfirmedCases: nationalWideConfirmedCases,
        isLoading: false,
        stateWiseStats: stats,
      })
    }
  }

  renderOverallNationalData = () => {
    const {
      totalConfirmedCases,
      totalActiveCases,
      totalRecoveredCases,
      totalDeceasedCases,
    } = this.state

    return (
      <>
        <div
          className="stats-block-column" // testid="countryWideConfirmedCases"
        >
          <p className="stats-title red">Confirmed</p>
          <img
            src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/check-mark_1checkmark_gn1drl.png"
            className="stats-icon"
            alt="country wide confirmed cases pic"
          />
          <p className="stats-number red">{totalConfirmedCases}</p>
        </div>

        <div
          className="stats-block-column" // testid="countryWideActiveCases"
        >
          <p className="stats-title blue">Active</p>
          <img
            src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/protection_1protection_image_tvwph1.png"
            className="stats-icon"
            alt="country wide active cases pic"
          />
          <p className="stats-number blue">{totalActiveCases}</p>
        </div>

        <div
          className="stats-block-column" // testid="countryWideRecoveredCases"
        >
          <p className="stats-title green">Recovered</p>
          <img
            src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/recovered_1recovered_img_h9h3uh.png"
            className="stats-icon"
            alt="country wide recovered cases pic"
          />
          <p className="stats-number green">{totalRecoveredCases}</p>
        </div>

        <div
          className="stats-block-column" // testid="countryWideDeceasedCases"
        >
          <p className="stats-title gray">Deceased</p>
          <img
            src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/breathing_1breathing_image_duhiky.png"
            className="stats-icon"
            alt="country wide deceased cases pic"
          />
          <p className="stats-number gray">{totalDeceasedCases}</p>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div
      className=" loader-container" // testid="homeRouteLoader"
    >
      <Loader type="Oval" color="#007BFF" height="50" width="50" />
    </div>
  )

  sortInAscendingOrder = () => {
    const {stateWiseStats} = this.state
    const sortedList = stateWiseStats.sort((current, next) => {
      const name1 = current.stateName.toUpperCase()
      const name2 = next.stateName.toUpperCase()
      return name1 > name2 ? 1 : -1
    })
    this.setState({stateWiseStats: sortedList})
  }

  sortInDescendingOrder = () => {
    const {stateWiseStats} = this.state
    const sortedList = stateWiseStats.sort((current, next) => {
      const name1 = current.stateName.toUpperCase()
      const name2 = next.stateName.toUpperCase()
      return name1 < name2 ? 1 : -1
    })
    this.setState({stateWiseStats: sortedList})
  }

  renderStateWiseStats = () => {
    const {stateWiseStats} = this.state
    return (
      <div
        className="state-wise-stats-container"
        // testid="stateWiseCovidDataTable"
      >
        <div className="state-wise-states-table">
          <div className="table-header">
            <div className="state-name-heading">
              <p className="table-header-title ">States/UT</p>
              <button
                className="order-btn"
                type="button"
                onClick={this.sortInAscendingOrder}
                title="click to sort in ascending order"
                // testid="ascendingSort"
              >
                {}
                <FcGenericSortingAsc className="sort-icon" />
              </button>

              <button
                className="order-btn"
                type="button"
                onClick={this.sortInDescendingOrder}
                title="click to sort in descending order"
                //  testid="descendingSort"
              >
                {}
                <FcGenericSortingDesc className="sort-icon" />
              </button>
            </div>
            <div className="other-tables-bar">
              <p className="table-header-title">Confirmed</p>
            </div>
            <div className="other-tables-bar">
              <p className="table-header-title">Active</p>
            </div>
            <div className="other-tables-bar">
              <p className="table-header-title">Recovered</p>
            </div>
            <div className="other-tables-bar">
              <p className="table-header-title">Deceased</p>
            </div>
            <div className="other-tables-bar">
              <p className="table-header-title">Population</p>
            </div>
          </div>
          <div className="state-wise-data-container">
            <ul className="other-tables">
              {stateWiseStats.map(obj => (
                <StateStatsItem key={obj.stateCode} StatData={obj} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  filterSearchSuggestion = () => {
    const {searchInput} = this.state
    const searchResult = statesList.filter(state =>
      state.state_name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    /* console.log(searchResult) */
    this.setState({filteredSearchSuggestions: searchResult})
  }

  onSearch = event => {
    this.setState(
      {
        searchInput: event.target.value,
      },
      this.filterSearchSuggestion,
    )
  }

  renderSearchSuggestions = () => {
    const {filteredSearchSuggestions} = this.state

    return (
      <ul
        className="search-result-container"
        //  testid="searchResultsUnorderedList"
      >
        {filteredSearchSuggestions.map(each => (
          <SearchSuggestionsItem key={each.state_code} stateDetails={each} />
        ))}
      </ul>
    )
  }

  removeSearchSuggestions = () => {
    this.setState({filteredSearchSuggestions: []})
  }

  renderHomeContent = () => {
    const {searchInput, filteredSearchSuggestions} = this.state

    const showSearchSuggestions =
      filteredSearchSuggestions.length === 0
        ? null
        : this.renderSearchSuggestions()

    /* {searchInput.length > 0 ? showSearchSuggestions : ''} */

    return (
      <>
        <div className="search-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            placeholder="Enter the State"
            className="search-bar"
            onChange={this.onSearch}
            onFocus={this.onSearch}
            /* onBlurCapture={this.removeSearchSuggestions} */
          />
        </div>
        {searchInput.length > 0 ? showSearchSuggestions : ''}
        <div className="dataView">
          <div className="country-stats">
            {this.renderOverallNationalData()}
          </div>
          <div className="state-table">{this.renderStateWiseStats()}</div>
        </div>
        <Footer />
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="home-container">
          <div className="home-content-container">
            {isLoading ? this.renderLoadingView() : this.renderHomeContent()}
          </div>
        </div>
      </>
    )
  }
}

export default Home
