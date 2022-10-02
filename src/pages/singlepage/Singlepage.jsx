import "./singlepage.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import TableComponent from "../../components/table/TableComponent";

const Singlepage = () => {
    return (
        <div className="singlepage">
            <Sidebar/>
            <div className="singlepagecontainer">
                <Navbar/>
            <div className="top">
                <div className="left">
                    <div className="editButton">
                        Edit
                    </div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=20&m=476085198&s=170667a&w=0&h=Ct4e1kIOdCOrEgvsQg4A1qeuQv944pPFORUQcaGw4oI="
                         alt="" className="itemImg" />
                         <div className="details">
                             <h1 className="itemTitle">Jane Doe</h1>
                             <div className="detailItem">
                                 <span className="itemKey">Email:</span>
                                 <span className="itemValue">janedoe@gmail.com</span>
                             </div>
                             <div className="detailItem">
                                 <span className="itemKey">Phone:</span>
                                 <span className="itemValue">123-456-778</span>
                             </div>
                             <div className="detailItem">
                                 <span className="itemKey">Address:</span>
                                 <span className="itemValue">Chujowa 1 Jajkowice</span>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={4 / 1} title="User Spending"/>
                </div>
            </div>
            <div className="bottom">
                <TableComponent/>
            </div>
            </div>
        </div>
      );
}
 
export default Singlepage;