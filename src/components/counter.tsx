import React, { Component } from 'react';

type CounterProps = {
    counter : {id:number, value:number},
    onDelete :(id : number) => void,
    onIncrement :(counter : {id:number, value:number}) => void,
    onDecrement :(counter : {id:number, value:number}) => void,
    
}
 
class Counter extends Component<CounterProps> {

    render() : JSX.Element { 

        return (
        <React.Fragment>
            <div className='row'>
                <div className="col-1">
                    <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button 
                        onClick={() => this.props.onIncrement(this.props.counter)} 
                        className="btn btn-primary btn-sm">+
                    </button>
                    <button 
                        disabled={(this.props.counter.value <= 0)} 
                        onClick={() => this.props.onDecrement(this.props.counter)} 
                        className="btn btn-secondary btn-sm m-2">-
                    </button>
                    <button 
                        onClick={() => this.props.onDelete(this.props.counter.id)} 
                        className='btn btn-danger btn-sm'>X
                    </button>
                </div>
            </div>
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