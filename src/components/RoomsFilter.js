import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    type,
    pets,
    breakfast
  } = context;

  //get the unique room types
  let types = getUnique(rooms, "type");

  //add all
  types = ["all", ...types];

  // map to the JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, capacity);
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end of the select*/}
        {/*guests number*/}

        {/*guests number*/}
        {/* Filter by price*/}
        <div className="form-group">
          {/* <label htmlFor="price">Room price UGX{price}</label>
        <span>Search for rooms basing on price... <br/>Move the</span><input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          /> */}
          {/*Filter using the size of the room */}
          {/* <div className="form-control">
            <label htmlFor="size">Room Size</label>
            <div className="size-inputs">
              <input
                type="number"
                name={maxSize}
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              ></input>
            </div>
          </div> */}
          {/*End of filter by size of the room */}
          {/* Start of the extras section
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div> */}
          {/*Filter by pets */}
          {/* <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div> */}
          {/*End of the extras section */}
        </div>
      </form>
    </section>
  );
}
