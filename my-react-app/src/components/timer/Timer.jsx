import React from "react";

export default function Timer({
  milliseconds,
  seconds,
  minutes,
  hours,
  changeSeconds,
  changeMinutes,
  changeHours,
}) {
  return (
    <div class="parent-time-box">
      <div className="time-box-1">
        <input value={hours} onChange={changeHours} />
      </div>{" "}
      <div className="time-box-2">
        
        <input value={minutes} onChange={changeMinutes} />
      </div>{" "}
      <div className="time-box-3">
        
        <input value={seconds} onChange={changeSeconds} />
      </div>{" "}
      <div className="time-box-4">
       
        <input value={milliseconds} />
      </div>{" "}
    </div>
  );
}
