import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const UpdateCalender = (props) => {
  const [value, onChange] = useState(new Date());
  const [disabledDates, setDisabledDates] = useState([]);
  const [submit, setSubmit] = useState(false);

  const isDayEnabled = (value, event) => {
    console.log("hi");
  };

  // const isMonthDisabled = ({ activeStartDate, date }) => {
  //   const currentMonth = date.getMonth();
  //   const activeStartMonth = activeStartDate.getMonth();
  //   return currentMonth === activeStartMonth;
  // };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={props.value}
        // tileDisabled={isMonthDisabled}
        onClickDay={isDayEnabled}
      />
    </div>
  );
};

export default UpdateCalender;
