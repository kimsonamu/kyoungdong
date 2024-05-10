import PropTypes from 'prop-types';
const RelationListItem = ({item}) => {
    const { id,url, imgurl,alt, desc } = item;
    return (
        <li data-idx={id}>
            <a href={url}>
                <div>
                    <img src={imgurl} alt={alt} />
                </div>
                <strong>{desc}</strong>
            </a>
        </li>
    );
};
RelationListItem.propTypes = {
    item:PropTypes.any,
    id:PropTypes.number,
    url:PropTypes.string,
    imgurl:PropTypes.string,
    alt:PropTypes.string,
    desc:PropTypes.string,
};
export default RelationListItem;