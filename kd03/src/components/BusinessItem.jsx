import PropTypes from 'prop-types';
const BusinessItem = ({item}) => {
    const {id,imgurl,alt,kor,eng,desc} = item;
    return (
        <li key={id}>
            <a href="#">
                <div>
                    <img src={imgurl} alt={alt} />
                    <span></span>
                </div>
                <h3>
                    {kor}<span>{eng}</span>
                </h3>
                <p>{desc}</p>
            </a>
        </li>
    );
};
BusinessItem.propTypes = {
    item:PropTypes.any,
    id:PropTypes.number,
    imgurl:PropTypes.string,
    alt:PropTypes.string,
    kor:PropTypes.string,
    eng:PropTypes.string,
    desc:PropTypes.string,
}
export default BusinessItem;