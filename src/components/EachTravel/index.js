import './index.css'

const EachTravel = props => {
  const {eachTravelList} = props
  const {imageUrl, name, description} = eachTravelList
  return (
    <li className="container-list">
      <img src={imageUrl} alt={name} className="image-url" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}

export default EachTravel
