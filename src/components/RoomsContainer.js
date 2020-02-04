import React from "react";
import RoomsFilter from "../components/RoomsFilter";
import RoomList from "./RoomList";
import { withRoomsConsumer } from "../context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomsConsumer(RoomsContainer);
