
interface totalCounter {
    totalCounter : any,
}

const NavBar = ({ totalCounter } : totalCounter) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                NavBar
                <span className='badge badge-pill badge-secondary m-2'>
                    {totalCounter}
                </span>
            </a>
            
        </nav>
     );
}

// class NavBar extends Component<NavProps> {
//     render() { 
//     }
// }
 
export default NavBar;