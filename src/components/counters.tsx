import React, { Component } from 'react';
import Counter from './counter';

type CountersProps = {
    counters : any,
    onDelete :(id : number) => void,
    onIncrement :(counter : {id:number, value:number}) => void,
    onReset : () => void,
}


class Counters extends Component<CountersProps> {

    render() : JSX.Element { 
        return (
            <div>
                <button onClick={this.props.onReset} className='btn btn-secondary btn-sm m-2'>Reset</button>
                <br />
                {this.props.counters.map((counter: { id: React.Key | null | undefined; }) => 
                <Counter key={counter.id} 
                    onDelete={this.props.onDelete} 
                    onIncrement={this.props.onIncrement}
                    counter={counter}/>)}
            </div>
        );
    }
}
 
export default Counters;