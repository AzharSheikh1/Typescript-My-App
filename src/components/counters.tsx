import React, { Component } from 'react';
import Counter from './counter';
 
class Counters extends Component {

    state = {
        counters : [
            {id : 1, value : 4},
            {id : 2, value : 0},
            {id : 3, value : 0},
            {id : 4, value : 1},
        ]
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    }

    handleDelete = (id : number) : void => {
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters});
    }

    handleIncrement = (counter : {id:number, value:number}) : void => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});
    }

    render() : JSX.Element { 
        return (
            <div>
                <button onClick={this.handleReset} className='btn btn-secondary btn-sm m-2'>Reset</button>
                <br />
                {this.state.counters.map(counter => 
                <Counter key={counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    counter={counter}/>)}
            </div>
        );
    }
}
 
export default Counters;