import './mainvisual.banner.scss';
const MainVisBanner = () => {
    return (
        <li className="on">
            <div className="inner">
                <div className="txt">
                    <h2>
                        Global Hyungdong <br />
                        with customer trust
                    </h2>
                    <p>고객이 신뢰하는 글로벌 에너지 지원 선도 기업</p>
                    <p className="more">
                        <a href="#">
                            Learn More<i className="xi-angle-right-min"></i>
                        </a>
                    </p>
                </div>
            </div>
        </li>
    );
};

export default MainVisBanner;