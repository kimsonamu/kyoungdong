import BusinessList from './BusinessList';
import './business.scss';
import arrBusiData from '../assets/api/business.data';
const Business = () => {
    return (
        <div className="con-box con1 box1">
            <div className="inner">
                <h2>BUSINESS</h2>
                <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>
                <BusinessList arrBusiData={arrBusiData} />
                <p className="more">
                    <a href="#">
                        <span>View more</span>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Business;
