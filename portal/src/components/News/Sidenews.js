import React from 'react';

import axios from 'axios';
import Singleside from './Singleside';
import Error from './Error';

export class Sidenews extends React.Component{
	
	constructor(props){
		super(props);
		this.state={
			sidenews:[],
		};
		//this.renderItems=this.renderItems(bind).this;
	}
	
	componentDidMount(){
		const url=`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`;
		
		axios.get(url)
			.then((response)=>{
				this.setState({sidenews:response.data.articles})
			})
			.catch((error)=>{
				this.setState({error:true})
			});
	}
	
	renderItems(){
		if(!this.state.error){
				return this.state.sidenews.map((item)=>( <Singleside key={item.url} item={item}/>
			));
		}
		else{
			return <Error />
		}
	}
	
	render(){
		return(
			<div>{this.renderItems()}</div>
		);
	}
}