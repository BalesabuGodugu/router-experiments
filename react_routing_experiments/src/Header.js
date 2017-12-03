import React,{Component} from 'react';
import {Link} from 'react-router-dom'


class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <h2> Routing v4 experiments</h2>
                    <nav>
                    <ul>
                        <li> <Link to="/">One</Link></li>
                        <li> <Link to="/two">Two</Link></li>
                        <li> <Link to="/three">Three</Link></li>
                    </ul>
                    </nav>
                </header>
                <hr/>
            </div>
        )
    }
}

export default Header;