import './index.css'

const OverAllDataSection = props => {
  const {changeCategoryFunc, ActiveDataCategory, overAllData} = props

  const overAllActiveCases =
    overAllData.confirmed - overAllData.recovered - overAllData.deceased

  const setCategoryConfirmed = () => {
    changeCategoryFunc('confirmed')
  }
  const setCategoryActive = () => {
    changeCategoryFunc('active')
  }

  const setCategoryRecovered = () => {
    changeCategoryFunc('recovered')
  }

  const setCategoryDeceased = () => {
    changeCategoryFunc('deceased')
  }

  let highlightConfirm = ''
  let highlightActive = ''
  let highlightDeceased = ''
  let highlightRecovered = ''

  switch (ActiveDataCategory) {
    case 'confirmed':
      highlightConfirm = 'highlightConfirmed '
      break
    case 'active':
      highlightActive = 'highlightActive '
      break

    case 'recovered':
      highlightRecovered = 'highlightRecovered'
      break

    default:
      highlightDeceased = 'highlightDeceased'
      break
  }

  return (
    <>
      <ul className="dataTabsContainer">
        <li
          className={`category-item Confirmed ${highlightConfirm} `}
          onClick={setCategoryConfirmed}
          key="state-specific-Confirmed"
        >
          <div testid="stateSpecificConfirmedCasesContainer">
            <p className="stats-title">Confirmed</p>
            <img
              src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/check-mark_1checkmark_gn1drl.png"
              alt="state specific confirmed cases pic"
              className="stats-img"
            />
            <p className="stats-number">{overAllData.confirmed}</p>
          </div>
        </li>
        <li
          className={`category-item Active ${highlightActive}`}
          onClick={setCategoryActive}
          key="state-specific-Active"
        >
          <div testid="stateSpecificActiveCasesContainer">
            <p className="stats-title">Active</p>
            <img
              src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/protection_1protection_image_tvwph1.png"
              alt="state specific active cases pic"
              className="stats-img"
            />
            <p className="stats-number">{overAllActiveCases}</p>
          </div>
        </li>
        <li
          className={`category-item Recovered ${highlightRecovered}`}
          onClick={setCategoryRecovered}
          key="state-specific-Recovered"
        >
          <div testid="stateSpecificRecoveredCasesContainer">
            <p className="stats-title">Recovered</p>
            <img
              src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/recovered_1recovered_img_h9h3uh.png"
              alt="state specific recovered cases pic"
              className="stats-img"
            />
            <p className="stats-number">{overAllData.recovered}</p>
          </div>
        </li>
        <li
          className={`category-item Deceased ${highlightDeceased}`}
          onClick={setCategoryDeceased}
          key="state-specific-Deceased"
        >
          <div testid="stateSpecificDeceasedCasesContainer">
            <p className="stats-title">Deceased</p>
            <img
              src="https://res.cloudinary.com/dawykjhkh/image/upload/v1670669719/breathing_1breathing_image_duhiky.png"
              alt="state specific deceased cases pic"
              className="stats-img"
            />
            <p className="stats-number">{overAllData.deceased}</p>
          </div>
        </li>
      </ul>
    </>
  )
}

export default OverAllDataSection
