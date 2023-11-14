import React from 'react';
import { useLoaderData } from 'react-router-dom';
import IMG from '../../assets/beard-1845166_1280.jpg'

const UserDetails = () => {
    const user = useLoaderData();
    const {name,username,phone,email,website,id} = user;
    return (
        <>
            <div className='container'>
                <div className="col w-50 my-5 mx-auto">
                    <div className="card">
                        <img src={IMG} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Name : {name}</h5>
                            <p className="card-text">User Name : {username}</p>
                            <p className="card-text">Email : {email}</p>
                            <p className="card-text">Phone : {phone}</p>
                            <p className="card-text">User ID : {id}</p>
                            <p className="card-text">Website : {website}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;