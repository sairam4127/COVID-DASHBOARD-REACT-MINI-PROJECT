import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import CovidCharts from '../CovidCharts'

import './index.css'

import OverAllDataSection from '../OverAllDataSection'

import DistrictCasesItem from '../DistrictCasesItem'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669343/Group_7362andaman_and_nicobar_scudkj.png',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669342/Group_7354andhara_pradesh_jtxqtd.png',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7340arunachal_pradesh_ifbgcv.png',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7341assam_xlikbe.png',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7335bihar_azpryq.png',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669343/Group_7361chandigarUt_p3vcvl.png',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7353chattisgarh_lkrykr.png',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669342/Group_7357daman_and_diu_ba869c.png',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669342/Group_7358delhi_eqgrx7.png',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7349goa_lngvd1.png',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7337gujarath_fefmr8.png',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669346/Group_7332haryana_t9vuot.png',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669346/Group_7364himachal_qi9acx.png',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669269/Group_7328jammu_and_kashmir_i7vpga.png',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7342jharkand_px6q55.jpg',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669343/Group_7339Karnataka_db4rv4.png',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669343/Group_7355kerala_oslztc.png',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669342/Group_7363Ladhak_mbtcdd.png',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669342/Group_7359lakshadeep_zbksuv.png',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7350Maharashtra_ldow5w.png',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7336madhaya_pradesh_ddxqmy.png',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7346manipur_geawgb.png',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7344meghalaya_rpiqfu.png',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7347mizeram_g7rhu6.png',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7345nagaland_a4rphc.png',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7348orissa_teeyxp.png',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669342/Group_7360puducherry_jtgnne.png',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669346/Group_7330punjab_fjz0rv.png',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669346/Group_7333rajasthan_xculhr.png',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7338sikkim_zybkvh.png',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669343/Group_7356tamilnadu_ufvlww.png',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669343/Group_7351Telangana_uyzwj4.png',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669344/Group_7352tripura_jmqxx2.png',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7334uttharakand_sg79mi.png',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669346/Group_7331uttarakand_htgjhs.png',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
    imageUrl:
      'https://res.cloudinary.com/dawykjhkh/image/upload/v1670669345/Group_7343westbengal_yzkfyv.png',
  },
]

/* const tabIds = {
  confirmed: 'CONFIRMED',
  active: 'ACTIVE',
  recovered: 'RECOVERED',
  deceased: 'DECEASED',
} */

class StateWiseDataPage extends Component {
  state = {
    isLoading: true,
    stateData: {},
    ActiveDataCategory: 'confirmed',
  }

  componentDidMount() {
    this.getStateData()
    this.getTimelinesdata()
  }

  getTimelinesdata = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    /* console.log(stateCode) */

    const url = 'https://apis.ccbp.in/covid19-timelines-data'

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const currentTimeData = data[stateCode]
    /* console.log('Rahs') */
    console.log(currentTimeData)
  }

  getStateData = async () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params
    /* console.log(stateCode) */

    const url = 'https://apis.ccbp.in/covid19-state-wise-data'
    /* const options = {method: 'GET'} */

    /* const response = await fetch(url, options) */
    const response = await fetch(url)
    const data = await response.json()
    const currentStateData = data[stateCode]
    /* const districtData = currentStateData.districts 
     console.log('Rama')
    console.log(currentStateData) */

    /* console.log(currentStateData) */
    /* const {districts} = currentStateData */
    /* const listOfStateData = Object.keys(districts).map(districtsName => ({
      districtsName: districts[districtsName],
    })) */

    this.setState({
      isLoading: false,
      stateData: currentStateData,
    })
  }

  getStateDetails = () => {
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const stateDetails = statesList.filter(
      obj => obj.state_code === stateCode,
    )[0]

    /* console.log(state) */

    return stateDetails
  }

  renderLoadingView = () => (
    <div //  testid="stateDetailsLoader"
      className=" loader-container"
    >
      <Loader type="Oval" color="#007BFF" height="50" width="50" />
    </div>
  )

  renderDistrictWiseCases = () => {
    const {stateData, ActiveDataCategory} = this.state
    /* console.log(stateData) */
    const {districts} = stateData
    /* console.log(districts) */
    const districtsNameList = Object.keys(districts)
    console.log(districtsNameList)
    let requiredCaseDetails
    if (ActiveDataCategory !== 'active') {
      requiredCaseDetails = districtsNameList.map(districtName => ({
        name: districtName,
        data: districts[districtName].total[ActiveDataCategory]
          ? districts[districtName].total[ActiveDataCategory]
          : 0,
      }))
      requiredCaseDetails.sort((obj1, obj2) => obj2.data - obj1.data)
    } else {
      const allCasesData = districtsNameList.map(districtName => ({
        name: districtName,
        confirmed: districts[districtName].total.confirmed
          ? districts[districtName].total.confirmed
          : 0,
        deceased: districts[districtName].total.deceased
          ? districts[districtName].total.deceased
          : 0,
        recovered: districts[districtName].total.recovered
          ? districts[districtName].total.recovered
          : 0,
      }))

      requiredCaseDetails = allCasesData.map(obj => ({
        name: obj.name,
        data: obj.confirmed - obj.deceased - obj.recovered,
      }))

      requiredCaseDetails.sort((obj1, obj2) => obj2.data - obj1.data)
    }

    /* console.log(requiredCaseDetails) */
    return (
      <ul
        className="district-wise-cases-list"
        // testid="topDistrictsUnorderedList"
      >
        {requiredCaseDetails.map(obj => (
          <DistrictCasesItem districtData={obj} key={obj.name} />
        ))}
      </ul>
    )
  }

  changeCategory = category => {
    this.setState({ActiveDataCategory: category})
  }

  renderCategoryTabs = () => {
    const {ActiveDataCategory, stateData} = this.state
    /* console.log(stateData)
    console.log(ActiveDataCategory) */
    const {total} = stateData

    return (
      <OverAllDataSection
        changeCategoryFunc={this.changeCategory}
        ActiveDataCategory={ActiveDataCategory}
        overAllData={total}
      />
    )
    /* const arrayOfTabs = Object.keys(total).slice(0, 4) */
    /* console.log(arrayOfTabs) */
  }

  formatDate = date => {
    const dateObject = new Date(date)

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const formatedDate = `${
      months[dateObject.getMonth()]
    } ${dateObject.getDate()}th ${dateObject.getFullYear()}`

    return formatedDate
  }
  /*  <p className="last-date">{`last update on ${this.formatDate(
            stateData.meta.date,
          )}`}</p> 
          {`last update on ${stateData.meta.last_updated}`} 
          */

  renderStateView = () => {
    const {ActiveDataCategory, stateData} = this.state
    const stateDetails = this.getStateDetails()
    const formatedDate = this.formatDate(stateData.meta.last_updated)
    /*  console.log(stateDetails.state_name)
   
    console.log(formatedDate) */
    console.log('jspp')
    console.log(stateData)
    const {total} = stateData
    const {tested} = total
    return (
      <>
        <div className="state-name-row">
          <h1 className="state-title">{stateDetails.state_name}</h1>
          <div className="testNo-container">
            <p className="test-title">
              Tested
              <br />
              {tested}
            </p>
            <p className="testNo"> </p>
          </div>
        </div>

        <div>
          <p className="last-date">{`last update on ${formatedDate}.`}</p>
        </div>

        <div className="country-stats">{this.renderCategoryTabs()}</div>

        <div className="state-additional-details-container">
          <img
            src={stateDetails.imageUrl}
            alt={stateDetails.state_name}
            className="state-img"
          />
          <div className="wid">
            <p className="ncp-title">NCP report </p>
            <div className="ncp-data-container">
              <div>
                <p className="ncp-category">Population</p>
                <p className="ncp-title">{stateData.meta.population}</p>
              </div>
              <div>
                <p className="ncp-category">Tested</p>
                <p className="ncp-title">{stateData.total.tested}</p>
                <p className="ncp-date">{`(AS of ${formatedDate} per source)`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="total-district-data-block">
          <h1 className={`district-heading ${ActiveDataCategory}`}>
            Top Districts
          </h1>

          {this.renderDistrictWiseCases()}

          <div className="graphs-data">
            <CovidCharts barChartType={ActiveDataCategory} />
          </div>
        </div>
      </>
    )
  }

  render() {
    /* console.log(this.props) */
    /* this.renderCategoryTabs() */
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="state-wise-data-main-container">
          <div className="state-content-container">
            {isLoading ? this.renderLoadingView() : this.renderStateView()}
          </div>
        </div>
      </>
    )
  }
}

export default StateWiseDataPage
