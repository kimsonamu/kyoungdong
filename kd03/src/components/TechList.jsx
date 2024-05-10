import PropTypes from 'prop-types';
import TechListItem from "./TechListItem";
import './techsys.list.scss';

const TechList = ({arrTechData}) => {
    return (
        <ul>
            {[...arrTechData].map(item=><TechListItem key={item.id} item={item} />)}
        </ul>
    );
};
TechList.propTypes = {
    arrTechData: PropTypes.array,
    item: PropTypes.any,
};

export default TechList;