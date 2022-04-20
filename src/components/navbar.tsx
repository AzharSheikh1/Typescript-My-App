import React, { Component } from 'react';

type NavProps = {
    totalCounter : number;
}

class NavBar extends Component<NavProps> {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    NavBar
                    <span className='badge badge-pill badge-secondary m-2'>
                        {this.props.totalCounter}
                    </span>
                </a>
                
            </nav>
         );
    }
}
 
export default NavBar;