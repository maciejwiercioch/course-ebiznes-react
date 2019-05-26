import React, {Component} from 'react';

class ProductForm extends Component {
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


    componentDidMount() {
        var url = "http://localhost:9090/getCategories";
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
            let categories = data;
            this.setState({categories: categories, category : categories[0].id, price : 0} )
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            category: this.state.category
        };
        var url = 'http://localhost:9090/addProduct';
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
        let value = "";
        if(event.target.name === 'category'){
            value = parseInt(event.target.value)
        }
        else if(event.target.name === 'price'){
            value = parseFloat(event.target.value)
        }
        else{
            value = event.target.value
        }

        this.setState({
            [event.target.name]: value,
        });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Product name</label>
                <input id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                <select id="category" name="category" value={this.state.category} onChange={this.handleChange}>
                    {this.state.categories.map((c) => <option
                        key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <label htmlFor="price">Price</label>
                <input id="price" type="number" name="price" value={this.state.price} onChange={this.handleChange}/>
                <label htmlFor="description">Description</label>
                <input id="description" name="description" type="text" value={this.state.description} onChange={this.handleChange}/>
                <button>Add product</button>
            </form>
        );
    }
}

export default ProductForm;