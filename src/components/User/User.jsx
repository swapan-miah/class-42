
import { Link } from 'react-router-dom';
import IMG from '../../assets/beard-1845166_1280.jpg'

const User = ({user}) => {
    const {name, email, id, username} = user;
    return (

        <>
            <div className="">
                <div className="col">
                    <div className="card">
                        <img src={IMG} className="card-img-top" alt="..." />
                        
                        <div className="card-body">
                            <h5 className="card-title">Name : {name}</h5>
                            <p className="card-text">Email : {email}</p>
                            {/* <p className="card-text">User Name : {username}</p>
                            <p className="card-text">User ID : {id}</p> */}
                            <Link to={`/users/${id}`}><button className="btn btn-outline-warning">Show Details</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;