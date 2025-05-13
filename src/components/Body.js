import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdata";
import { useEffect, useState } from "react";

const Body = () =>{
  const [listofResturamt , setListOfResturant] = useState(resList);

//   useEffect(()=>{
//      fetchData();
//   },[])

//  const fetchData = async () =>{
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//     const json =  await data.json() 
//     console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
//   };

    return (
      <>
      <div className="bodyContainer">
      <button className="filter-button"
      onClick= {()=>{
        const filteredList = listofResturamt.filter(
          (res)=>res.card.card.info.avgRating > 4
        )
        setListOfResturant(filteredList);
      }}
      >
        Top Rated Restaurant
        </button>
      <div className="res-container">
         {listofResturamt.map((resturant) => <ResturantCard key={resturant.id} resData={resturant}/>)}
      </div>
    </div>
    </>
    )
  };

  export default Body;