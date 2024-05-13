import MainVisBanner from './MainVisBanner';
import './mainvisual.scss';
const MainVisual = () => {
    return (
        <section id="visual">
            <ul className="main-banner">
                <MainVisBanner />
            </ul>
            <p className="btn-wrap">
                <button className="btn prev">
                    <img src="./images/main/btn_prev2.png" alt="이전버튼" />
                </button>
                <button className="btn next">
                    <img src="./images/main/btn_next2.png" alt="다음버튼" />
                </button>
            </p>
            <p className="scroll">
                <img src="./images/main/scroll.png" alt="마우스스크롤링" />
            </p>
        </section>
    );
};

export default MainVisual;
