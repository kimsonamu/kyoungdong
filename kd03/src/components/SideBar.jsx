import './sidebar.scss';
const SideBar = () => {
    return (
        <nav id="gnb">
            <li className="on">
                <a href="#">MAIN</a>
            </li>
            <li>
                <a href="#">BUSINESS</a>
            </li>
            <li>
                <a href="#">TECHNOLOGY</a>
            </li>
            <li>
                <a href="#">PUBLIC RELATIONS</a>
            </li>
            <li>
                <a href="#">ABOUT</a>
            </li>
        </nav>
    );
};

export default SideBar;
