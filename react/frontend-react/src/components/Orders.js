import React, {Component} from 'react';
class Orders extends Component {
    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }
    componentDidMount() {
        var url = "http://localhost:9090/getOrders";
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

            let orders = data.map((order) => {
                return (
                    <div key={order.id}>
                        <div>Order id: {order.id}</div>
                        <div>User id: {order.userID}</div>
                        <div>Address: {order.address}</div>
                        <br/>
                    </div>
                )
            });
            this.setState({orders: orders})
        })
    }
    render() {
        return (
            <div className="orders">
                {this.state.orders}
            </div>
        )
    }
}
export default Orders;