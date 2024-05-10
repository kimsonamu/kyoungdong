import './header.nav.scss';
const Nav = () => {
    return (
        <nav className="nav">
            <ul className="gnb">
                <li>
                    <a href="#">회사소개</a>
                </li>
                <li>
                    <a href="#">사업분야</a>
                </li>
                <li>
                    <a href="#">기술혁신</a>
                </li>
                <li>
                    <a href="#">홍보센터</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;