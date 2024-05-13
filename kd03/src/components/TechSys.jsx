import TechList from './TechList';
import './techsys.scss';
import arrTechData from '../assets/api/techsys.data';
const TechSys = () => {
    return (
        <div className="con-box con2 box1">
            <div className="inner">
                <h2>TECHNOLOGICAL INNOVATION</h2>
                <TechList arrTechData={arrTechData} />
            </div>
        </div>
    );
};

export default TechSys;
