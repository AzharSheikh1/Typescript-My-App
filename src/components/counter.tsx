import React, { Component } from 'react';

type CounterProps = {
    counter : any,
    onDelete :(id : number) => void,
    onIncrement :(counter : {id:number, value:number}) => void,
}
 
class Counter extends Component<CounterProps> {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // styles = {
    //     height: 100
    // };

    // renderTags() : JSX.Element {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //     return <ul>{this.state.tags.map(tag => <li key={tag}> {tag} </li>)}</ul>;
    // }

    render() : JSX.Element { 

        return (
        <React.Fragment>
            <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary">Increament</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger m-2'>Delete</button>
            <br />
        </React.Fragment>
        );
    }

    getbadgeClasses() : string {
        let classes : string = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() : string | number{
        const {value}  = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;