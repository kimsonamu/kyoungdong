import PropTypes from 'prop-types';
import BusinessItem from './BusinessItem';
import './business.list.scss';
const BusinessList = ({arrBusiData}) => {
    return (
        <ul>
            {
                [...arrBusiData].map((item)=><BusinessItem key={item.id} item={item} />)
            }
        </ul>
    );
};
BusinessList.propTypes = {
    arrBusiData: PropTypes.array,
    item: PropTypes.any,
};
export default BusinessList;