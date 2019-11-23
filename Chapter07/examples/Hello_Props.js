import React from 'react';
class Hello extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {user: 'John'}
        this.state = {username: 'Pamela'}
        // this.state = {firstName: 'John', lastName: 'Johnson', age: 30}
        // this.setState({firstName: 'Jim', age: 31}); // Change state value
        // this.state.firstName = 'Jim'; // WRONG
    }
        
    render() {
        return <h1>Hello World {this.state.user}</h1>;
    }
}
export default Hello;