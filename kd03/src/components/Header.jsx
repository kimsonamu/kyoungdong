import Nav from './Nav';
import TopMenu from './TopMenu';
import './header.scss';
const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <a href="index.html">
                        <img src="../src/assets/images/common/logo_pc.png" alt="인덱스로고" />
                    </a>
                </h1>
                <Nav />
                <TopMenu />
            </div>
        </header>
    );
};

export default Header;
