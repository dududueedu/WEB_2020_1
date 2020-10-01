import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import Create from './components/Create'
import Home from './components/Home'
import List from './components/List'
import Edit from './components/Edit'

export default class App extends Component {
    render(){
        return(
            <Router>
                <div className='container'>
                <nav className="navbar navbar-expand-lg navbar-light">
                <Link to={'/'} className="navbar-brand"> Home </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto">

                    <li>
                    <Link to={"/create"} className="nav-link">Criar</Link>
                    </li>

                    <li>
                    <Link to={"/list"} className="nav-link">Listar</Link>
                    </li>

                    </ul>

                </div>
                </nav>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/create' component={Create} />
                    <Route path='/list' component={List} />
                    <Route path='/edit/:id' component={Edit}/>
                </Switch>
                </div>
            </Router>
        )
    }
}