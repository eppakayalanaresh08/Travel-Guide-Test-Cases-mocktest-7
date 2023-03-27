import {Component} from 'react'

import Loader from 'react-loader-spinner'

import EachTravel from '../EachTravel'

import './index.css'

class TravelGuide extends Component {
  state = {isStatus: false, listObjects: []}

  componentDidMount() {
    this.getApiTravel()
  }

  getApiTravel = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const fetchData = await fetch(apiUrl)
    const data = await fetchData.json()
    const updateDate = data.packages.map(eachObject => ({
      description: eachObject.description,
      imageUrl: eachObject.image_url,
      name: eachObject.name,
      id: eachObject.id,
    }))

    this.setState({listObjects: updateDate, isStatus: true})
  }

  renderApiTravel = () => {
    const {listObjects} = this.state
    return (
      <ul className="container-travelList">
        {listObjects.map(eachItem => (
          <EachTravel eachTravelList={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isStatus} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading-travel">Travel Guide</h1>
        <div className="card-container">
          {isStatus ? (
            this.renderApiTravel()
          ) : (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
