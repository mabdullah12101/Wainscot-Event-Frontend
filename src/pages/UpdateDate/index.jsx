import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllEvents, updateEvent } from "../../stores/actions/event";
import moment from "moment";

export default function UpdateDate() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    if (events.length > 0 && !done) {
      events.map((item) => {
        console.log(item);
        const date = moment(item.dateTimeShow).subtract(-1, "days").format();
        dispatch(updateEvent({ ...item, dateTimeShow: date }, item.eventId));
        setDone(true);
      });
    }
  }, [events]);

  const getAll = async () => {
    dispatch(getAllEvents(1, 100)).then((res) => {
      setEvents(res.action.payload.data.data);
    });
  };

  return (
    <div className="h-screen bg-black">
      <h1>UpdateDate</h1>
    </div>
  );
}
