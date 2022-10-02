import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar = () => {
    return (
        <div className="navbar">
          <div className="wrapper">
            <div className="search">
              <input type="text" placeholder="Search..."/>
              <SearchIcon/>
            </div>
            <div className="items">
              <div className="item"><NotificationsActiveOutlinedIcon/><div className="notificationCounter">4</div></div>
              <div className="item"><MailOutlineOutlinedIcon/><div className="notificationCounter">1</div></div>
              <div className="item"><ListOutlinedIcon/></div>
              <div className="item"><div className="avatar"><img src="https://images.unsplash.com/photo-1638991505440-f241c482c5a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80" className="avatar" alt="baba" /></div></div>
            </div>
          </div>
        </div>
      );
}
 
export default Navbar;