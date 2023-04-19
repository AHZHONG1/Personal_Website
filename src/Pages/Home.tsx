import Header from '../components/Header';
import './Home.css'

function Home() {
    return (
        <div>
            <div>
                <Header position='Home' />
            </div>
            <div className="selfDefinedBody">
                <div className="card text-center fs-2 selfDefinedSize">
                    <img src="../../public/images/main_image.jpg" className="card-img" />
                    <div className="card-img-overlay">
                        <div className="card-body">
                            <div className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur labore excepturi nemo reprehenderit dolorum. Iusto?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;