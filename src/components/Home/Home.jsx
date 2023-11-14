import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Home = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="container row row-cols-1 row-cols-md-3 d-flex justify-content-center py-3 my-3 g-4 mx-auto">
            {users.map(user => <User 
            key={user.id} 
            user={user}>
            </User>)}
        </div>
    );
};

export default Home;