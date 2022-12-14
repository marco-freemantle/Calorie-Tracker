import "./Progress.css";
import SideBar from "../../Navigation/SideBar";
import WeightGraph from "../../WeightComponents/WeightGraph";

function Progress() {
  return (
    <div className="progress-flex-box">
      <SideBar />
      <WeightGraph />
    </div>
  );
}

export default Progress;
