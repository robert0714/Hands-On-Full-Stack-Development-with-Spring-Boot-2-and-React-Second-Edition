import React from 'react';
class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: 'John'}
    }
    componentDidMount() {
        this.setState({user: 'Jim'});
    } 

    render() {
        return <h1>Hello World {this.state.user}</h1>;
    }
    shouldComponentUpdate(nextProps, nextState) {
        // This function should return a boolean, whether the component should re-render.
        return true;
    }
}
export default Hello;