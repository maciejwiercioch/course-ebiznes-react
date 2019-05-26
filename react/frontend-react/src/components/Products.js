import React, {Component} from 'react';
class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }
    componentDidMount() {
        var url = "http://localhost:9090/getProducts";
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
            let products = data.map((prod) => {
                return (
                    <div key={prod.id}>
                        <div className="title">Name: {prod.name}</div>
                        <div>Price: {prod.price}</div>
                        <div>Description: {prod.description}</div>
                        <div>Category:{prod.category}</div>
                        <br/>
                    </div>
                )
            })
            this.setState({products: products})
        })
    }
    render() {
        return (
            <div className="products">
                {this.state.products}
            </div>
        )
    }
}
export default Products;