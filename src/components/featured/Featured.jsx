import "./featured.scss"
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
    return (  
        <div className="featured">
            <div className="top">
                <h1 className="title">
                    Dzisiejszy utarg
                </h1>
                <DensityMediumOutlinedIcon/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>
                <br></br>
                <p className="title">Całość sprzedaży</p>
                <p className="amount">1000zł</p>
                <p className="desc">Rekordowa sprzedaż, najwyższy utarg</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">
                            Target
                        </div>
                        <div className="itemResult negative">
                            <ArrowUpwardOutlinedIcon/>
                            <div className="resultAmount">1500zł</div>
                        </div>
                    </div>
                    <div className="item">
                    <div className="itemTitle">
                            Last Week
                        </div>
                        <div className="itemResult positive">
                            <ArrowUpwardOutlinedIcon/>
                            <div className="resultAmount">1500zł</div>
                        </div>
                    </div>
                    <div className="item">  
                        <div className="itemTitle">
                            Yesterday
                        </div>
                        <div className="itemResult positive">
                            <ArrowUpwardOutlinedIcon/>
                            <div className="resultAmount">1500zł</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Featured;
