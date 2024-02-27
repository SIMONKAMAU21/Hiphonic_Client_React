// CalendarPopup.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPopup = ({ onClose, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <div className="calendar-popup">
      <div className="calendar-header">
        <button onClick={onClose}>Close</button>
      </div>
      <Calendar
        onChange={handleDateSelect}
        value={selectedDate}
      />
    </div>
  );
};

export default CalendarPopup;
