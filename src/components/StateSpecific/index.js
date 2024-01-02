import moment from 'moment'

import {
  XAxis,
  LineChart,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Line,
} from 'recharts'

import {Component} from 'react'

import Header from '../Header'

import Footer from '../Footer'

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

console.log(statesList)

const apiConst = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'INPROGRESS',
  initial: 'INITIAl',
}

class StateSpecific extends Component {
  state = {
    apiStatus: apiConst.initial,
    stateObj: {},
    activeSec: 0,
    districtsList: [],
    barGraphDates: [],
  }

  componentDidMount() {
    this.getStateSpecificApi()
    this.getStateSpecificTimeLine()
  }

  convertObjectsDataIntoListItemsUsingForInMethodDates = data => {
    const resultList = []
    // console.log('rama')
    // console.log(data)
    // getting keys of an object object
    const keyNames = Object.keys(data)

    //  console.log(keyNames)
    keyNames.forEach(keyName => {
      // console.log(keyName)
      if (data[keyName]) {
        const {total} = data[keyName]
        // console.log(total)
        // if the state's covid data is available we will store it or we will store 0
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0

        // console.log(statesList)
        resultList.push({
          date: keyName,
          confirmed,
          tested,
          deceased,
          recovered,

          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  convertObjectsDataIntoListItemsUsingForInMethodDistricts = data => {
    const resultList = []
    // getting keys of an object object
    const keyNames = Object.keys(data)
    // console.log(data)

    //  console.log(keyNames)
    keyNames.forEach(keyName => {
      // console.log(keyName)
      if (data[keyName]) {
        const {total} = data[keyName]
        // console.log(total)
        // if the state's covid data is available we will store it or we will store 0
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0

        // console.log(statesList)
        resultList.push({
          districtName: keyName,
          confirmed,

          deceased,
          recovered,

          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  convertObjectsDataIntoListItemsUsingForInMethod = data => {
    const resultList = []
    // getting keys of an object object
    const keyNames = Object.keys(data)
    // console.log(keyNames)
    keyNames.splice(33, 1)
    //  console.log(keyNames)
    keyNames.forEach(keyName => {
      // console.log(keyName)
      if (data[keyName]) {
        const {total} = data[keyName]
        // if the state's covid data is available we will store it or we will store 0
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = data[keyName].meta.population
          ? data[keyName].meta.population
          : 0
        // console.log(statesList)
        resultList.push({
          stateCode: keyName,
          name: statesList.find(state => state.state_code === keyName),
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  getStateSpecificTimeLine = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response1 = await fetch('https://apis.ccbp.in/covid19-timelines-data')
    const data1 = await response1.json()
    // console.log(data1)
    const stateDates = data1[id]
    //  console.log(stateDates)
    const {dates} = stateDates
    // console.log(dates)
    const updatedData = this.convertObjectsDataIntoListItemsUsingForInMethodDates(
      dates,
    )
    // console.log(updatedData)
    // console.log(updatedData.slice(updatedData.length - 10))
    this.setState({barGraphDates: updatedData})
  }

  getStateSpecificApi = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch('https://apis.ccbp.in/covid19-state-wise-data')
    const data = await response.json()

    // console.log(data)
    // console.log(id)
    const Obj = data[id]
    console.log(data[id])
    let updatedData = this.convertObjectsDataIntoListItemsUsingForInMethod(data)
    // console.log(updatedData)
    updatedData = updatedData.filter(eachobj => eachobj.stateCode === id)
    console.log(updatedData)
    const {districts} = Obj
    console.log(districts)
    const disList = this.convertObjectsDataIntoListItemsUsingForInMethodDistricts(
      districts,
    )
    // console.log(disList)
    this.setState({
      stateObj: Obj,
      apiStatus: apiConst.success,
      districtsList: disList,
    })
  }

  onActiveConfirm = () => {
    this.setState({activeSec: 0})
  }

  onActiveActive = () => {
    console.log(1)
    this.setState({activeSec: 1})
  }

  onActiveRecovered = () => {
    this.setState({activeSec: 2})
  }

  onActiveDeceased = () => {
    this.setState({activeSec: 3})
  }

  successView = () => {
    const {stateObj, activeSec, districtsList, barGraphDates} = this.state
    // console.log(stateObj)
    console.log('radha')
    console.log(barGraphDates)
    const {total, meta} = stateObj
    const {tested, confirmed, recovered, deceased} = total

    const date = new Date(meta.last_updated)
    const dateMonth = moment(date).format('MMMM')
    const dateYear = moment(date).format('YYYY')
    const dateDate = moment(date).format('DD')
    const {match} = this.props
    const {params} = match
    const {id} = params
    let stateName = statesList.filter(eachobj => eachobj.state_code === id)
    stateName = stateName[0].state_name
    /// console.log(stateName)

    // Active Sec
    const confirmActive =
      activeSec === 0
        ? 'state-wide-confirmed-cases-active'
        : 'state-wide-confirmed-cases'

    const activeActive =
      activeSec === 1
        ? 'state-wide-active-cases-active'
        : 'state-wide-active-cases'

    const recoveredActive =
      activeSec === 2
        ? 'state-wide-recovered-cases-active'
        : 'state-wide-recovered-cases'

    const deceasedActive =
      activeSec === 3
        ? 'state-wide-deceased-cases-active'
        : 'state-wide-deceased-cases'

    // Top Districts

    let filteredTopDis
    if (activeSec === 0) {
      filteredTopDis = districtsList.map(eachobj => ({
        val: eachobj.confirmed,
        name: eachobj.districtName,
      }))
    }
    if (activeSec === 1) {
      filteredTopDis = districtsList.map(eachobj => ({
        val: eachobj.active,
        name: eachobj.districtName,
      }))
    }
    if (activeSec === 2) {
      filteredTopDis = districtsList.map(eachobj => ({
        val: eachobj.recovered,
        name: eachobj.districtName,
      }))
    }
    if (activeSec === 3) {
      filteredTopDis = districtsList.map(eachobj => ({
        val: eachobj.deceased,
        name: eachobj.districtName,
      }))
    }
    filteredTopDis = filteredTopDis.slice().sort((a, b) => {
      const val1 = a.val
      const val2 = b.val
      if (val1 < val2) {
        return 1
      }
      if (val1 > val2) {
        return -1
      }
      return 0
    })

    // Bar Graph

    const barGraphDatesLast10 = barGraphDates.slice(barGraphDates.length - 10)
    let filteredBarData
    let barFill
    if (activeSec === 0) {
      barFill = '#9A0E31'
      filteredBarData = barGraphDatesLast10.map(eachobj => ({
        date: eachobj.date,
        count: eachobj.confirmed,
      }))
    }
    if (activeSec === 1) {
      barFill = '#0A4FA0'
      filteredBarData = barGraphDatesLast10.map(eachobj => ({
        date: eachobj.date,
        count: eachobj.active,
      }))
    }
    if (activeSec === 2) {
      barFill = '#216837'
      filteredBarData = barGraphDatesLast10.map(eachobj => ({
        date: eachobj.date,
        count: eachobj.recovered,
      }))
    }
    if (activeSec === 3) {
      barFill = '#474C57'
      filteredBarData = barGraphDatesLast10.map(eachobj => ({
        date: eachobj.date,
        count: eachobj.deceased,
      }))
    }

    // Line Charts

    const confirmedLine = barGraphDates.map(eachobj => ({
      date: eachobj.date,
      count: eachobj.confirmed,
    }))

    const activeLine = barGraphDates.map(eachobj => ({
      date: eachobj.date,
      count: eachobj.active,
    }))

    const recoveredLine = barGraphDates.map(eachobj => ({
      date: eachobj.date,
      count: eachobj.recovered,
    }))

    const deceasedLine = barGraphDates.map(eachobj => ({
      date: eachobj.date,
      count: eachobj.deceased,
    }))

    const testedLine = barGraphDates.map(eachobj => ({
      date: eachobj.date,
      count: eachobj.tested,
    }))

    return (
      <>
        <div className="state-specific-success-state-name-cont">
          <div className="state-specific-success-state-name">
            <p className="state-specific-success-state-name-para">
              {stateName}
            </p>
          </div>
          <div className="state-specific-success-state-name-test-cont">
            <p className="state-specific-success-state-name-test-para">
              Tested
            </p>
            <p className="state-specific-success-state-name-test-para">
              {tested}
            </p>
          </div>
        </div>
        <p className="state-specific-success-state-last-upd-date">{`Last update on ${dateMonth} ${dateDate} ${dateYear}.`}</p>

        <ul className="state-specific-state-wide-details">
          <li
            key="1"
            onClick={this.onActiveConfirm}
            tabIndex="-1"
            //  testid="stateSpecificConfirmedCasesContainer"
            className={confirmActive}
          >
            <p className="country-wide-confirmed-cases-para">Confirmed</p>
            <img
              src="https://res.cloudinary.com/sairam4127/image/upload/v1702999789/check-mark_1_kv2sqd.svg"
              alt="state specific confirmed cases pic"
              className="state-wide-confirmed-cases-img"
            />
            <p className="country-wide-confirmed-cases-para">{confirmed}</p>
          </li>
          <li
            key="2"
            // testid="stateSpecificActiveCasesContainer"
            onClick={this.onActiveActive}
            tabIndex="-1"
            className={activeActive}
          >
            <p className="country-wide-active-cases-para">Active</p>
            <img
              src="https://res.cloudinary.com/sairam4127/image/upload/v1703047850/protection_1_znin21.svg"
              alt=" state specific active cases pic"
              className="country-wide-confirmed-cases-img"
            />
            <p className="country-wide-active-cases-para">
              {confirmed - (recovered + deceased)}
            </p>
          </li>{' '}
          <li
            key="3" //  testid="stateSpecificRecoveredCasesContainer"
            onClick={this.onActiveRecovered}
            className={recoveredActive}
          >
            <p className="country-wide-recovered-cases-para">Recovered</p>
            <img
              src="https://res.cloudinary.com/sairam4127/image/upload/v1703048023/recovered_1_wrlohy.svg"
              alt="state specific recovered cases pic"
              className="country-wide-confirmed-cases-img"
            />
            <p className="country-wide-recovered-cases-para">{recovered}</p>
          </li>{' '}
          <li
            key="4"
            // testid="stateSpecificDeceasedCasesContainer"
            onClick={this.onActiveDeceased}
            className={deceasedActive}
          >
            <p className="country-wide-deceased-cases-para">Deceased</p>
            <img
              src="https://res.cloudinary.com/sairam4127/image/upload/v1703048065/breathing_1_ffusxx.svg"
              alt=" state specific deceased cases pic"
              className="country-wide-confirmed-cases-img"
            />
            <p className="country-wide-deceased-cases-para">{deceased}</p>
          </li>
        </ul>
        <p className={`state-specific-top-dis-para top-p-${activeSec}`}>
          Top Districts
        </p>
        <ul className="state-specific-top-district-cont">
          {filteredTopDis.map(eachobj => (
            <li className="state-specific-top-district-item">
              <p className="state-specific-top-district-item-para">
                {eachobj.val}{' '}
              </p>
              <p className="state-specific-top-district-item-para">
                {' '}
                {eachobj.name}
              </p>
            </li>
          ))}{' '}
        </ul>
        <div className="bar-cont">
          <div>
            <BarChart width={800} height={300} data={filteredBarData}>
              <XAxis dataKey="date" />

              <Tooltip />
              <barSize className="bar" />

              <Bar
                dataKey="count"
                fill={barFill}
                className="bar"
                label={{position: 'top', color: 'white'}}
              />
            </BarChart>
          </div>
        </div>
        <div // line cahrts
          className="state-specific-line-charts-cont"
        >
          <p className="state-specific-line-charts-para">Daily Spread Trends</p>{' '}
          <div className="state-specific-confirmed-line-charts">
            <div className="App">
              <LineChart
                width={730}
                height={250}
                data={confirmedLine}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />

                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
          <div className="state-specific-active-line-charts">
            <div className="App">
              <LineChart
                width={730}
                height={250}
                data={activeLine}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>{' '}
          <div className="state-specific-recovered-line-charts">
            <div className="App">
              <LineChart
                width={730}
                height={250}
                data={recoveredLine}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>{' '}
          <div className="state-specific-deceased-line-charts">
            <div className="App">
              <LineChart
                width={730}
                height={250}
                data={deceasedLine}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
          <div className="state-specific-tested-line-charts">
            <div className="App">
              <LineChart
                width={730}
                height={250}
                data={testedLine}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
              >
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </div>
      </>
    )
  }

  variousViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConst.success:
        return this.successView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="state-specific-main-cont">
        <Header activeRoute="activehome" />
        {this.variousViews()}
        <Footer />
      </div>
    )
  }
}

export default StateSpecific
