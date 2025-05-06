import ResturantCard from "./ResturantCard";
import resList from "../utils/mockdat";

const Body = () =>{
    return (
      <>
      <div className="bodyContainer">
      <div className="search"> Search </div>
      <div className="res-container">
         {resList.map((resturant) => <ResturantCard key={resList.id} resData={resturant}/>)}
      </div>
    </div>
    </>
    )
  };

  export default Body;