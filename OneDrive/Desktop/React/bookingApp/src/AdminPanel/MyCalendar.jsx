import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyComponent = () => {
  const [disabledDates, setDisabledDates] = useState({});

  const selectDate = (selectedValue) => {
    setDisabledDates((prev) => ({
      ...prev,
      [selectedValue.toDateString()]: true,
    }));
  };

  const isDateDisabled = ({ date }) => {
    const dateString = date.toDateString();
    return disabledDates[dateString];
  };

  return (
    <div>
      <Calendar tileDisabled={isDateDisabled} onClickDay={selectDate} />
    </div>
  );
};

export default MyComponent;
