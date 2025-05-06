import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) =>{
    const {resData} = props
    const {name , cuisines, avgRating , cloudinaryImageId} = resData?.card?.card?.info
    console.log(props)
    return (
      <>
      <div className="res-card">
      <img className="img" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      </div>
      </>
    )
  };

  export default ResturantCard;