import React, { Component } from 'react';
import './App.css';
import {News} from './News/News';
import {Sidenews} from './News/Sidenews';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			news1:{
				type:'top-headlines',
				query:'sources=techcrunch'
			},
			news2:{
				type:'top-headlines',
				query:'country=us&category=business'
			},
			news3:{
				type:'everything',
				query:'domains=comicbookmovie.com&language=en'
			}
		};
	}
  render() {
    return (
      <div className="container-fluid">
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper indigo lighten-4">
					<a href="/" className="bran-logo center" style={{paddingLeft: 520,fontSize:40}}> My Feed</a>
				</div>
			</nav>
		</div>
		<div className="row">
			<div className="col s8">
				 <News news={this.state.news1}/>
				 <News news={this.state.news2}/>
			</div>
			<div className="col s4">
				<Sidenews news={this.state.news3}/>
			</div>
		</div>
      </div>
    );
  }
}

export default App;
