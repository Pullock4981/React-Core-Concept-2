// learn use effedct

import { useEffect, useState } from "react";
import OneUser from "./OneUser";


const User = () => {
    // state declare
    const [users, setUsers] = useState([]);

    // useEffect use

    useEffect(() =>{
        // data fatch kore load kora
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user =><OneUser user={user}></OneUser>)
            }
        </div>
    );
};

export default User;