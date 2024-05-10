import PropTypes from 'prop-types';
import './about.list.scss';
const AboutList = ({arrConList}) => {
    return (
        <ul>
            {[...arrConList].map(item=>(
            <li key={item.id}>
                <a href={item.url}>
                    <span>
                        <img src={item.imgurl} alt={item.alt} />
                    </span>
                    <strong>
                        {item.desc1}<span>{item.desc2}</span>
                    </strong>
                </a>
            </li>
            ))}
        </ul>
    );
};
AboutList.propTypes = {
    arrConList:PropTypes.any
};
export default AboutList;