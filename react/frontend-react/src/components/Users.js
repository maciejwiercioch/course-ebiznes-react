import React, {Component} from 'react';
class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        };
    }
    componentDidMount() {
        var url = "http://localhost:9090/getUsers";
        fetch(url, {
            mode: 'cors',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'http://localhost:3000',
            },
            method: 'GET',
        })
            .then(results => {
                return results.json();
            }).then(data => {
            console.log(data);
            let users = data.map((user) => {
                return (
                    <div key={user.id}>
                        <div>Id:{user.id}</div>
                        <div>Email: {user.email}</div>
                        <div>Password: {user.password}</div>
                        <div>Firstname: {user.firstname}</div>
                        <div>Lastname: {user.lastname}</div>
                        <div>Phone: {user.phone}</div>
                        <div>City: {user.city}</div>
                        <div>Country: {user.country}</div>
                        <div>Address: {user.address}</div>
                        <br/>
                    </div>
                )
            })
            this.setState({users: users})
        })
    }
    render() {
        return (
            <div className="users">
                {this.state.users}
            </div>
        )
    }
}
export default Users;