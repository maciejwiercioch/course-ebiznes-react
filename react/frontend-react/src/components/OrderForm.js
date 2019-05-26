import React, {Component} from 'react';

class OrderForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            users: [],
            user: "",
            address: ""
        }
    }


    componentDidMount() {
        var url = "http://localhost:9090/getUsers";
        fetch(url, {
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            },
            method: 'GET',
        })
            .then(results => {
                return results.json();
            }).then(data => {
            console.log(data);
            let users = data;
            this.setState({users: users})
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            user: this.state.user,
            address: this.state.address
        };
        var url = 'http://localhost:9090/addOrder';
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                data
            ),
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="user">User:</label>
                <select id="user" name="user" value={this.state.user} onChange={this.handleChange}>
                    {this.state.users.map((u) => <option
                        key={u.id} value={u.id}>{u.address}</option>)}
                </select>
                <label htmlFor="address">Address:</label>
                <input id="address" name="address" type="text" value={this.state.address} onChange={this.handleChange}/>
                <button>Add order</button>
            </form>
        );
    }
}

export default OrderForm;