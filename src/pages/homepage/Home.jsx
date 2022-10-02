import React from "react";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Wigdet";
import Chart from "../../components/chart/Chart";
import "./home.scss";
import TableComponent from "../../components/table/TableComponent";
const Home = () => {
    return (
        <>
        <div className="home">
            <Sidebar />
            <div className="homeContent">
                <Navbar/>
                <div className="widgets">
                <Widget type="users"/>
                <Widget type="earnings"/>
                <Widget type="orders"/>
                <Widget type="balance"/>
                </div>
                <div className="charts">
                    <Featured/>
                    <Chart/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Ostatnie transakcje</div>
                    <TableComponent/>
                </div>
            </div>
        </div>
        </>
      );
}
 
export default Home;