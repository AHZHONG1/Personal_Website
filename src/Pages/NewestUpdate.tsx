import Header from "../components/Header";

function NewestUpdate() {
    return (
        <div>
            <Header position="NewestUpdate" />
            <div>
            </div>
            <div className="selfDefinedBody">
                <div className="text-center fs-3">Newest Update</div>
                <div className="container">
                    <table className="table table-info table-striped">
                        <thead>
                            <tr>
                                <th scope="col" className="w-25">Date</th>
                                <th scope="col" className="w-75">Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023-4-19</td>
                                <td>Creating Website</td>
                            </tr>
                            <tr>
                                <td>2023-4-19</td>
                                <td>Creating Website</td>
                            </tr>
                            <tr>
                                <td>2023-4-19</td>
                                <td>Creating Website</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default NewestUpdate;