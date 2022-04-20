import React, { Component } from 'react';

 
class Counter extends Component {
    state = {
        count:4,
        imgUrl : 'https://picsum.photos/200'
    };

    styles = {
        height: 100
    };

    render() { 
        return (
        <React.Fragment>
            <img style={this.styles} src={this.state.imgUrl} alt="" /> <br />
            <span className='badge badge-primary m-2'>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        );
    }

    formatCount() : string | number{
        const {count}  = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;