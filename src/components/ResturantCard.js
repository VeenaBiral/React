import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ resData }) => {
    // Restaurant details are inside `resData.info`
    const restaurantInfo = resData?.info;

    if (!restaurantInfo) return <p>No restaurant data found.</p>;

    const { name, cuisines, avgRating, cloudinaryImageId } = restaurantInfo;

    return (
        <div className="res-card">
            <img className="img" src={CDN_URL + cloudinaryImageId} alt={name} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating}</h4>
        </div>
    );
};

  export default ResturantCard;