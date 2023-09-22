import "./App.css";
import SalesMapping from "./components/Chart/SalesMapping";
import TopProduct from "./components/Chart/TopProduct";
import TodaySales from "./components/Chart/today";
import VisitorIn from "./components/Chart/visitorIn";
import Customer from "./components/Chart/Customer";
import TotalRevenue from "./components/Chart/TotalRevenue";
import TargetVs from "./components/Chart/TargetVs";
import VolumeVs from "./components/Chart/VolumeVs";
import { Fragment } from "react";
import Navbar from "./components/Dasboard/Navbar";
import SideBar from "./components/Dasboard/SideBar";
function App() {
  return (
    <Fragment>
      <main className="dashboard relative">

      {/* <SideBar /> */}
      <Navbar />
      <div className="grid grid-rows-10 lg:grid-cols-10 gap-3 bg-slate-100 pt-3 pr-5 pl-5 ">
        <TodaySales />
        <VisitorIn />
        <TotalRevenue />
        <Customer />
        <TargetVs />
        <TopProduct />
        <SalesMapping />
        <VolumeVs />
      </div>
      </main>
    </Fragment>
  );
}

export default App;
