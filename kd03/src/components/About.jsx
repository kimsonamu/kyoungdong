import AboutList from './AboutList';
import './about.scss';
const arrConList = [
    {id:1,url:'#',imgurl:'../src/assets/images/main/main_foot_icn01.png',alt:'두루마리문서아이콘',desc1:'CEO 인사말',desc2:`CEO's Greetings`},
    {id:2,url:'#',imgurl:'../src/assets/images/main/main_foot_icn02.png',alt:'지구순환아이콘',desc1:'경영이념',desc2:`Management Philosophy`},
    {id:3,url:'#',imgurl:'../src/assets/images/main/main_foot_icn03.png',alt:'돋보기와빌딩아이콘',desc1:'관계사',desc2:`Business Overview`},
];
const About = () => {
    return (
        <div className="con-box con4 box2" style={{backgroundImage:`url('../src/assets/images/main/main_foot_bg.jpg')`}}>
            <div className="inner">
                <div className="left">
                    <h2>
                        ABOUT <span>KYUNGDONG</span>
                    </h2>
                    <p>
                        서민연료인 연탄에서 신재생 에너지까지 에너지를 통한 <br />
                        따뜻한 삶의 공간 창조 바로 경동이 함께합니다.
                    </p>
                    <p className="more">
                        <a href="#">
                            <span>
                                Learn more<i className="xi-angle-right-min"></i>
                            </span>
                        </a>
                    </p>
                </div>
                <AboutList arrConList={arrConList} />
            </div>
        </div>
    );
};

export default About;
