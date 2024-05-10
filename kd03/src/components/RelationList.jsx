import PropTypes from 'prop-types';
import './relation.list.scss';
import RelationListItem from './RelationListItem';
const RelationList = ({arrRelData}) => {
    return (
        <ul>
            {[...arrRelData].map(item=><RelationListItem key={item.id} item={item} />)}
        </ul>
    );
};
RelationList.propTypes = {
    arrRelData:PropTypes.array,
    item:PropTypes.any
};
export default RelationList;