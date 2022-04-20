import React, { Component } from 'react';

type CounterProps = {
    value : number,
    selected? : boolean
}
 
class Counter extends Component<CounterProps> {
    state = {
        value:this.props.value,
        tags : []
    };

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

    handleIncrement = (product: {id : number}) : void => {
        this.setState({value:this.state.value + 1})
    }

    render() : JSX.Element { 

        return (
        <React.Fragment>
            <span className={this.getbadgeClasses()}>{this.state.value}</span>
            <button onClick={() => this.handleIncrement({id:1})} className="btn btn-primary">Increament</button>
            <br />
        </React.Fragment>
        );
    }

    getbadgeClasses() : string {
        let classes : string = "badge m-2 badge-";
        classes += (this.state.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    // formatCount() : string | number{
    //     const {count}  = this.state;
    //     return count === 0 ? 'Zero' : count;
    // }
}
 
export default Counter;