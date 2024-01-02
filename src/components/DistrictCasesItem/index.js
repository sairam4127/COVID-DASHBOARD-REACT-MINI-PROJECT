import './index.css'

const DistrictCasesItem = props => {
  const {districtData} = props
  const {name, data} = districtData
  return (
    <li className="district-item">
      <p className="cases-number">{data}</p>
      <p className="district-name">{name}</p>
    </li>
  )
}

export default DistrictCasesItem
