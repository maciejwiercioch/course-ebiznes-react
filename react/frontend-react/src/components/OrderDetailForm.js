import React, {Component} from 'react';

class OrderDetailForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            orders: [],
            products: [],
            order : "",
            product : "",
            quantity : ""
        }
    }


    componentDidMount() {

        var ordersUrl = "http://localhost:9090/getOrders";
        fetch(ordersUrl, {
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
            let orders = data;
            console.log(orders);
            this.setState({orders: orders, order : orders[0].id} )
        });

        var productsUrl = "http://localhost:9090/getProducts";
        fetch(productsUrl, {
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
            let products = data;
            console.log(products);
            this.setState({products: products} )
        });




    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            order: this.state.order,
            product: this.state.product,
            quantity: this.state.quantity
        };
        console.log(data);
        var url = 'http://localhost:9090/addOrderDetail';
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
        if(event.target.name === 'quantity'){
            value = parseInt(event.target.value)
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
                <label htmlFor="order">Order id:</label>
                <select id="order" name="order" value={this.state.order} onChange={this.handleChange}>
                    {this.state.orders.map((o) => <option
                        key={o.id} value={o.id}>{o.id}</option>)}
                </select>
                <label htmlFor="product">Product name:</label>
                <select id="product" name="product" value={this.state.product} onChange={this.handleChange}>
                    {this.state.products.map((p) => <option
                        key={p.id} value={p.id}>{p.name}</option>)}
                </select>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
                <button>Add Order Detail</button>
            </form>
        );
    }
}

export default OrderDetailForm;