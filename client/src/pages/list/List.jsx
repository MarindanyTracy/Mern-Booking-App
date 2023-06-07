import React from "react";
import "./list.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Header from "../../components/Header/Header.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem.jsx";
import useFetch from '../../hooks/useFetch.js';

const List = () => {
  const location = useLocation();

  // console.log(location.state);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const {data, loading, error, reFetch } = useFetch(`http://localhost:5000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)

  const handleClick = () => {
    reFetch()
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date: </label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} `}</span>
            {openDate && <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={ new Date() }
                ranges={date}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price <small>per night</small></span>
                <input type="number" onChange={e => setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Max price <small>per night</small></span>
                <input type="number" onChange={e => setMax(e.target.value)}className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult </span>
                <input type="number" className="lsOptionInput" min={1} placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" className="lsOptionInput" min={0} placeholder={options.children} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" className="lsOptionInput" min={1} placeholder={options.room} />
              </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
           {loading ? "Loading..." : <>
           {data.map(item => (
             <SearchItem key={item._id} item={item} />
           ))}
           </>
           } 
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
