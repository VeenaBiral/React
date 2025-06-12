import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
  const [listOfResturant , setListOfResturant] = useState([]);

  useEffect(()=>{
     fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json)

    setListOfResturant(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants)
  }

  //conditinal Rendering

    return  (listOfResturant === 0) ? (
       <Shimmer/>
     ) : (
      <>
      <div className="bodyContainer">
      <button className="filter-button"
      onClick= {()=>{
        const filteredList = listOfResturant.filter(
          (res)=>res.info.avgRating > 4.5
        )
        setListOfResturant(filteredList);
      }}
      >
        Top Rated Restaurant
        </button>
      <div className="res-container">
         {listOfResturant?.map((resturants) => <ResturantCard key={resturants.info.id} resData={resturants}/>)}
      </div>
    </div>
    </>
    )
  };

  export default Body;