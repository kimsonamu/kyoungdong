import RelationList from './RelationList';
import './relation.scss';
import arrRelData from '../assets/api/relation.data';
const Relation = () => {
    return (
        <div className="con-box con3 box2">
            <div className="inner">
                <div className="left">
                    <h2>PUBLIC RELATIONS</h2>
                    <p>
                        ㈜경동은 나눔문화, 기업의 사회공헌, 자원봉사 등을 통한 <br />
                        지역 네트워크 구축과 사회연대의식 함양과 소외계층 <br />
                        삶의 질 향상을 위해 적극 노력하고 있습니다.
                    </p>
                    <p className="more">
                        <a href="#">
                            <span>View more</span>
                        </a>
                    </p>
                </div>
                <RelationList arrRelData={arrRelData} />
            </div>
        </div>
    );
};

export default Relation;
