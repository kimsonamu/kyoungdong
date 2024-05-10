import MainVisBanner from './MainVisBanner';
import './mainvisual.scss';
const MainVisual = () => {
    return (
        <section id="visual">
            <ul className="main-banner">
                <MainVisBanner />
                {/* <li>
                    <div className="inner">
                        <div className="txt">
                            <h2>Energy-basaed industry</h2>
                            <p>광산 40년! 석탄사업은 국가 경제개발의 기반이었습니다.</p>
                            <p className="more">
                                <a href="#">
                                    Learn More<i className="xi-angle-right-min"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <div className="txt">
                            <h2>Create great value</h2>
                            <p>경동은 에너지 자원의 가치를 창조합니다.</p>
                            <p className="more">
                                <a href="#">
                                    Learn More<i className="xi-angle-right-min"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="inner">
                        <div className="txt">
                            <h2>We will provide bright energy</h2>
                            <p>에너지를 통한 따뜻한 삶의 공간 창조 경동이 함께 하겠습니다.</p>
                            <p className="more">
                                <a href="#">
                                    Learn More<i className="xi-angle-right-min"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </li> */}
            </ul>
            <p className="btn-wrap">
                <button className="btn prev">
                    <img src="http://www.kyungdong.co.kr/ko/front/image/main/btn_prev2.png" alt="이전버튼" />
                </button>
                <button className="btn next">
                    <img src="http://www.kyungdong.co.kr/ko/front/image/main/btn_next2.png" alt="다음버튼" />
                </button>
            </p>
            <p className="scroll">
                <img src="http://www.kyungdong.co.kr/ko/front/image/main/scroll.png" alt="마우스스크롤링" />
            </p>
        </section>
    );
};

export default MainVisual;
