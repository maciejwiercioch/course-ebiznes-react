import React, {Component} from 'react';
class OrderDetails extends Component {
    constructor() {
        super();
        this.state = {
            orderDetails: [],
        };
    }
    componentDidMount() {
        var url = "http://localhost:9090/getOrderDetails";
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
            let orderDetails = data.map((od) => {
                return (
                    <div key={od.id}>
                        <div>Order Detail id: {od.id}</div>
                        <div>Order id: {od.orderID}</div>
                        <div>Product id: {od.productID}</div>
                        <div>Quantity: {od.quantity}</div>
                        <br/>
                    </div>
                )
            });
            this.setState({orderDetails: orderDetails})
        })
    }
    render() {
        return (
            <div className="orderDetails">
                {this.state.orderDetails}
            </div>
        )
    }
}
export default OrderDetails;