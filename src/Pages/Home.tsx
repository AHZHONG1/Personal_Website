import Header from '../components/Header';
import './Home.css'

function Home() {
    return (
        <div>
            <div>
                <Header position='Home' />
            </div>
            <div className="selfDefinedBody">
                This is home page
            </div>
        </div>
    );
}

export default Home;