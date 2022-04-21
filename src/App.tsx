import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {

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

    getTotalCounter() : number {
      return this.state.counters.filter(counter => {
        return counter.value > 0;
      }).length;
    }

    handleDecrement = (counter : {id:number, value:number}) : void => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;

        this.setState({counters});
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounter={this.getTotalCounter()}/>
                <main className='container'>
                  <Counters 
                    onReset = {this.handleReset}
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    counters={this.state.counters}
                  />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
