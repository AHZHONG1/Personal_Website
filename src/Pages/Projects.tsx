import Header from "../components/Header";

function Projects() {
    return (
        <div>
            <Header position="Projects" />
            <div>
            </div>
            <div className="selfDefinedBody">
                <div className="text-center fs-3">Projects</div>
                <div className="container h-75">
                    <div className="row row-cols-2 w-100 h-100">
                        <div className="col-6 border border-white">
                            <div className="container">
                                <div>Project List</div>
                                
                            </div>
                        </div>
                        <div className="col-6 border border-white">
                            <div className="container">
                                <div>Content</div>
                                <div>Text</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;