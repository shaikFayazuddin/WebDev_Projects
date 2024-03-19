import { Button } from "./Button";
import { useState } from "react";

export function Users(){
    const [users, setUsers] = useState([{
        "firstName" : "Fayazuddin",
        "lastName" : "Shaik",
        "_id" : 1
    }])

    return <div>
        <div>
            Users
        </div>
        <div>
            <input type="text" placeholder="Search Users"  />
        </div>
        <div>
            {users.map(user => <User user={user}/>)}
        </div>
    </div>
}

function User({user}){
    return <div>
        <div>
            {user.firstName[0]}
        </div>
        <div>
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
        <div>
            <Button label={"Send Money"}></Button>
        </div>
    </div>
}