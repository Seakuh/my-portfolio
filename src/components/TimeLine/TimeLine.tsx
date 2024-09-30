import { Chrono } from "react-chrono";
import { items } from "./data";
import "./TimeLine.css";

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <Chrono
        fliplayout={false}
        enableLayoutSwitch={false}
        items={items}
        mode="VERTICAL"
        theme={{
          primary: "blue",
          secondary: "grey",
          cardBgColor: "white",
          cardForeColor: "black",
        }}
      />
    </div>
  );
};

export default TimeLine;
