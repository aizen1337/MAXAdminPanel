import "./widget.scss";
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
const Widget = ({ type }) => {
    let data;
    let amount = 100;
    let difference = 10;
    switch(type) {
        case "users":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <ContactPageOutlinedIcon/>
                )
            };
            break;
            case "orders":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "Check all orders",
                icon: (
                <LocalShippingOutlinedIcon/>
                )
            };
            break;
            case "earnings":
                data = {
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View net earnings",
                    icon: (
                        <AttachMoneyOutlinedIcon/>
                        )
                };
            break;
            case "balance":
                     data = {
                        title: "BALANCE",
                        isMoney: true,
                        link: "Check your balance",
                        icon: (
                            <CurrencyExchangeOutlinedIcon/>
                        )
                    };
            break;        
        default:
                break;
    }
    return (  
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "PLN"}{amount}</span>
                <span className="link">{data.link}</span>
                </div>
            <div className="right">
                <div className="percentage positive">{difference}%</div>
                <div className="rankup">{data.icon}</div>
            </div>
        </div>
    );
}
 
export default Widget;