import { Link, useSearchParams } from "react-router-dom";
import React, { ChangeEvent } from "react";
import { arr } from "../Xaliner/xaliner";
import { arr_tangaran } from "../Shop/shop_tangaran";
import "./search.css"

const Search = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParam({ searchGenre: value.toLowerCase() });
  };

  const searchGenre = searchParam.get("searchGenre") || "";
  const combinedArr = [...arr, ...arr_tangaran];

  return (
    <div className="relative">

    <input
        id="search"
        placeholder="Search"
        value={searchGenre}
        onChange={handleSearch}
        style={{backgroundColor:'inherit',color:'inherit'}}
      />
    <div className={`d-flex flex-column ${searchGenre ? "search" : ""}`}>

      
      <div className="search-results bg-dark">
        {combinedArr
          .filter(item => item.text.toLowerCase().includes(searchGenre))
          .map((item, i) => (
            <div className="">
                {
                    searchGenre?
                    <div className="">
                       <Link className="bg-dark d-flex" to={`/shop/${item.id}`} key={item.id} >
                <img width={80} height={75} key={i} src={item.img} alt={item.text} />
                <span className="small text-light"  >{item.text}</span></Link>  
                    </div>
                   :null
                }
                
            </div>
            
          ))}
      </div>
    </div></div>
  );
};

export default Search;

