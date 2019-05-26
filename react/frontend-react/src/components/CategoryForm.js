import React, {Component} from 'react';

class CategoryForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            categories: [],
            name: "",
            price : "",
            category : "",
            description : ""
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.state.name
        };
        var url = 'http://localhost:9090/addCategory';
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
                <label htmlFor="name">Category name</label>
                <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                <button>Add category</button>
            </form>
        );
    }
}

export default CategoryForm;