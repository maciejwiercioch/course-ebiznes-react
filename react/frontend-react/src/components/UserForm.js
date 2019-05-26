import React, {Component} from 'react'

class UserForm extends Component{

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email : "",
            password : "",
            firstname : "",
            lastname : "",
            phone: "",
            country : "",
            city : "",
            address : ""
        }
    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const data = this.state;

        var url = 'http://localhost:9090/addUser';
        fetch(url, {
            method : 'POST',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => console.log(res))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                <label htmlFor="firstname">First name:</label>
                <input id="firstname" name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange}/>
                <label htmlFor="lastname">Last name:</label>
                <input id="lastname" name="lastname" type="text" value={this.state.lastname} onChange={this.handleChange}/>
                <br/>
                <label htmlFor="phone">Phone:</label>
                <input id="phone" name="phone" type="text" value={this.state.phone} onChange={this.handleChange}/>
                <label htmlFor="country">Country:</label>
                <input id="country" name="country" type="text" value={this.state.country} onChange={this.handleChange}/>
                <label htmlFor="city">City:</label>
                <input id="city" name="city" type="text" value={this.state.city} onChange={this.handleChange}/>
                <label htmlFor="address">Address:</label>
                <input id="address" name="address" type="text" value={this.state.address} onChange={this.handleChange}/>
                <br />
                <button>Add user</button>
            </form>
        )
    }
}


export default UserForm;