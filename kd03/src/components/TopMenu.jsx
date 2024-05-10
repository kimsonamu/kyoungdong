import './header.topmenu.scss';
const TopMenu = () => {
    return (
        <div className="util">
            <ul className="lang">
                <li className="on">
                    <a href="#">KOR</a>
                </li>
                <li>
                    <a href="#">ENG</a>
                </li>
            </ul>
            <p className="all-menu">
                <i className="xi-bars"></i>
            </p>
        </div>
    );
};

export default TopMenu;