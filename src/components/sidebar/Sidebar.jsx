import "./sidebar.scss";
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:'none'}}>
                <span className="logo">MAXAdmin</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                    <li>
                    <Link to="/" style={{textDecoration:'none' ,color:'white'}}>
                    <HomeWorkIcon className="icon"/>
                        <span class="listItem">
                            Dashboard
                        </span>
                    </Link>
                    </li>
                    <li>
                        <Link to="/users" style={{textDecoration:'none' ,color:'white'}}>
                        <PeopleAltIcon className="icon"/>
                        <span class="listItem">
                           Users
                        </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" style={{textDecoration:'none' ,color:'white'}}>
                        <LocalOfferIcon className="icon"/>
                        <span class="listItem">
                            Products
                        </span>
                        </Link>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span class="listItem">
                            Orders
                        </span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon"/>
                        <span class="listItem">
                            Notifications
                        </span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span class="listItem">
                            Settings
                        </span>
                    </li>
                    <li>
                        <AccountCircleIcon className="icon"/>
                        <span class="listItem">
                            Profile
                        </span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span class="listItem">
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
      );
}
 
export default Sidebar;