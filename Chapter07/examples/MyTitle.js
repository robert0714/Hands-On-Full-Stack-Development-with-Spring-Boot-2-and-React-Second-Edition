import React, { Component } from 'react';


export default class MyTitle extends Component {
    // This solution might not work correctly
 incrementCounter = () => {
    this.setState({count: this.state.count + 1});
 }
 
 // The correct way is the following
 incrementCounter = () => {
   this.setState((prevState) => {
     return {count: prevState.count + 1}
   });
 }
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
            </div>
        );
    };
};

