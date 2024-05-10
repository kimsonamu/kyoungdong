import About from './components/About';
import Business from './components/Business';
import Footer from './components/Footer';
import Header from './components/Header';
import MainVisual from './components/MainVisual';
import Relation from './components/Relation';
import SideBar from './components/SideBar';
import TechSys from './components/TechSys';
import './components/Root.scss';

function App() {
    return (
        <>
            <p id="skipNav">
                <a href="#content">본문바로가기</a>
            </p>
            <div id="wrap">
                <Header />
                <MainVisual />
                <main id="container" className="main">
                    <section id="content">
                        <Business />
                        <TechSys />
                        <Relation />
                        <About />
                    </section>
                </main>
                <Footer />
                <SideBar />
            </div>
        </>
    );
}

export default App;
