import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'

import BarChartItem from '../BarChartItem'

import LineChartItem from '../LineChartItem'
import Footer from '../Footer'

class CovidCharts extends Component {
  state = {isLoading: true, timeLineData: {}, lastTenDaysData: []}

  componentDidMount() {
    this.getTimeLineData()
  }

  renderLoadingView = () => (
    <div testid="timelinesDataLoader" className=" loader-container">
      <Loader type="Oval" color="#007BFF" height="50" width="50" />
    </div>
  )

  getLastTenDaysData = dates => {
    const ListOfDates = Object.keys(dates)
    const lastTenDaysDates = ListOfDates.slice(
      ListOfDates.length - 10,
      ListOfDates.length,
    )
    const arrayOfRecentData = lastTenDaysDates.map(date => ({
      date,
      confirmed: dates[date].total.confirmed,
      confirmedLabel: this.DataFormatter(dates[date].total.confirmed),
      active:
        dates[date].total.confirmed -
        dates[date].total.recovered -
        dates[date].total.deceased,
      activeLabel: this.DataFormatter(
        dates[date].total.confirmed -
          dates[date].total.recovered -
          dates[date].total.deceased,
      ),

      recovered: dates[date].total.recovered,
      recoveredLabel: this.DataFormatter(dates[date].total.recovered),
      deceased: dates[date].total.deceased,
      deceasedLabel: this.DataFormatter(dates[date].total.deceased),
      tested: dates[date].total.tested,
    }))

    return arrayOfRecentData
  }

  getTimeLineData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    const url = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const response = await fetch(url)
    const data = await response.json()
    const timeLineData = data[stateCode]
    const {dates} = timeLineData
    const ListOfDates = Object.keys(dates)

    const arrayOfRecentData = ListOfDates.map(date => ({
      date,
      confirmed: dates[date].total.confirmed,
      recovered: dates[date].total.recovered,
      deceased: dates[date].total.deceased,
      active:
        dates[date].total.confirmed -
        dates[date].total.recovered -
        dates[date].total.deceased,
      tested: dates[date].total.tested,
    }))

    const lastTendaysData = this.getLastTenDaysData(dates)
    /* console.log(lastTendaysData) */

    this.setState({
      isLoading: false,
      timeLineData: arrayOfRecentData,
      lastTenDaysData: lastTendaysData,
    })
  }

  formatDate = date => {
    const dateString = new Date(date).toDateString()
    const formatedDate = dateString.slice(8, 10) + dateString.slice(3, 7)
    return formatedDate
  }

  DataFormatter = number => {
    if (number > 1000) {
      /* return `${Math.round(number / 1000).toString()}k` */
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  renderAllCharts = () => {
    const {lastTenDaysData, timeLineData} = this.state
    const {barChartType} = this.props

    return (
      <>
        <div className="barchart-container">
          <div className="for-scroll">
            <BarChartItem
              barChartType={barChartType}
              arrayOfRecentData={lastTenDaysData}
              formatDateFunc={this.formatDate}
            />
          </div>
        </div>

        <h1 className="charts-title">Daily Spread Trends</h1>
        <div className="barcharts-container" testid="lineChartsContainer">
          <div className="charts confirmed-background">
            <LineChartItem
              dataType="confirmed"
              DataFormatter={this.DataFormatter}
              timeLineData={timeLineData}
            />
          </div>
          <div className="charts active-background">
            <LineChartItem
              dataType="active"
              DataFormatter={this.DataFormatter}
              timeLineData={timeLineData}
            />
          </div>
          <div className="charts recovered-background">
            <LineChartItem
              dataType="recovered"
              DataFormatter={this.DataFormatter}
              timeLineData={timeLineData}
            />
          </div>
          <div className="charts deceased-background">
            <LineChartItem
              dataType="deceased"
              DataFormatter={this.DataFormatter}
              timeLineData={timeLineData}
            />
          </div>
          <div className="charts tested-background">
            <LineChartItem
              dataType="tested"
              DataFormatter={this.DataFormatter}
              timeLineData={timeLineData}
            />
          </div>
        </div>
        <Footer />
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <div className="charts-container">
          {isLoading ? this.renderLoadingView() : this.renderAllCharts()}
        </div>
      </>
    )
  }
}

export default withRouter(CovidCharts)
