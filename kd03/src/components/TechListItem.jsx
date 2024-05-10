import PropTypes from 'prop-types';
const TechListItem = ({item}) => {
    const { id, imgurl,alt, kor, eng, desc1,desc2 } = item;
    return (
        <li data-idx={id}>
            <div>
                <a href="#">
                    <img src={imgurl} alt={alt} />
                    <h3>
                        {kor}<span>{eng}</span>
                    </h3>
                    <b>
                        <i className="xi-arrow-down"></i>
                    </b>
                </a>
            </div>
            <p>
                {desc1}<br />{desc2}
            </p>
            <p className="more">
                <a href="#">
                    <span>View more</span>
                </a>
            </p>
        </li>
    );
};
TechListItem.propTypes = {
    item:PropTypes.any,
    id:PropTypes.number,
    imgurl:PropTypes.string,
    alt:PropTypes.string,
    kor:PropTypes.string,
    eng:PropTypes.string,
    desc1:PropTypes.string,
    desc2:PropTypes.string,
}
export default TechListItem;