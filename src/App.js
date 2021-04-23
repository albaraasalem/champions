import React, {Component} from 'react'; 
import CardList from './CardList'; 
import SearchBox from './SearchBox';
import {legends} from './legends'; 
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state = {
			legends: legends, 
			searchfield: '',
			isMarksmen: false,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isSupports: false,

			isHigh: false,
			isModerate: false, 
			isLow: false

		}
	}

	refreshPage = () =>{
		window.location.reload();
	}

	onSearchChange = (event) => {
		this.setState( { searchfield: event.target.value}) 
	}

	toggleMarksmen = () =>{
		this.setState({ isMarksmen: !this.state.isMarksmen,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isSupports: false,
			isHigh: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleAssassins = () =>{
		this.setState({ isAssassins: !this.state.isAssassins,
			isMarksmen: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isSupports: false,
			isHigh: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleMages = () =>{
		this.setState({ isMages: !this.state.isMages,
			isAssassins: false,
			isMarksmen: false, 
			isFighters: false,
			isTanks: false,
			isSupports: false,
			isHigh: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleFighters = () =>{
		this.setState({ isFighters: !this.state.isFighters,
			isAssassins: false,
			isMages: false, 
			isMarksmen: false,
			isTanks: false,
			isSupports: false,
			isHigh: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleTanks = () =>{
		this.setState({ isTanks: !this.state.isTanks,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isMarksmen: false,
			isSupports: false,
			isHigh: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleSupports = () =>{
		this.setState({ isSupports: !this.state.isSupports,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isMarksmen: false,
			isHigh: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleHigh = () =>{
		this.setState({ isHigh: !this.state.isHigh,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isMarksmen: false,
			isSupports: false,
			isModerate: false, 
			isLow: false
		})
	}

	toggleModerate = () =>{
		this.setState({ isModerate: !this.state.isModerate,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isMarksmen: false,
			isSupports: false,
			isHigh: false, 
			isLow: false
		})
	}

	toggleLow = () =>{
		this.setState({ isLow: !this.state.isLow,
			isAssassins: false,
			isMages: false, 
			isFighters: false,
			isTanks: false,
			isMarksmen: false,
			isSupports: false,
			isModerate: false, 
			isHigh: false
		})
	}


	compundDidMount(){
		this.setState({legends: legends})
	}

	render(){
		const { legends, searchfield} = this.state; 
		const filteredLegends = legends.filter(legends =>{
			return legends.name.toLowerCase().includes(searchfield.toLowerCase()); 
		})

		const filteredMarksmen = legends.filter(legends =>{
			return legends.role.toLowerCase().includes('marksman'); 
		})

		const filteredAssassins = legends.filter(legends =>{
			return legends.role.toLowerCase().includes('assassin'); 
		})

		const filteredMages = legends.filter(legends =>{
			return legends.role.toLowerCase().includes('mage'); 
		})

		const filteredFighters = legends.filter(legends =>{
			return legends.role.toLowerCase().includes('fighter'); 
		})

		const filteredTanks = legends.filter(legends =>{
			return legends.role.toLowerCase().includes('tank'); 
		})

		const filteredSupports = legends.filter(legends =>{
			return legends.role.toLowerCase().includes('support'); 
		})

		const filteredHigh = legends.filter(legends =>{
			return legends.difficulty.toLowerCase().includes('high'); 
		})

		const filteredModerate = legends.filter(legends =>{
			return legends.difficulty.toLowerCase().includes('moderate'); 
		})

		const filteredLow = legends.filter(legends =>{
			return legends.difficulty.toLowerCase().includes('low'); 
		})

		const refreshPage = () =>{
			window.location.reload(false);
		}	

		if(this.state.isMarksmen){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredMarksmen} />
				</div>
			);
		}
		else if(this.state.isAssassins){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredAssassins} />
				</div>
			);
		}
		else if(this.state.isFighters){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredFighters} />
				</div>
			);
		}
		else if(this.state.isMages){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredMages} />
				</div>
			);
		}
		else if(this.state.isTanks){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredTanks} />
				</div>
			);
		}
		else if(this.state.isSupports){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredSupports} />
				</div>
			);
		}
		else if(this.state.isHigh){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredHigh} />
				</div>
			);
		}
		else if(this.state.isModerate){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredModerate} />
				</div>
			);
		}
		else if(this.state.isLow){
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredLow} />
				</div>
			);
		}
		else{
			return(
				<div className = 'tc'>
					<div className = 'tl'>
						<div className = 'topnav'>
							<div className="navbar">
		  						<div className="dropdown">
		    						<button className="dropbtn">Roles
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleMarksmen}>Marksmen</button>
					      				<button onClick = {this.toggleAssassins}>Assassins</button>
					      				<button onClick = {this.toggleFighters}>Fighters</button>
					      				<button onClick = {this.toggleMages}>Mages</button>
					      				<button onClick = {this.toggleSupports}>Supports</button>
					      				<button onClick = {this.toggleTanks}>Tanks</button>
		    						</div>
		  						</div>

		  						<div className="dropdown">
		    						<button className="dropbtn">Difficulties
		      							<i className="fa fa-caret-down"></i>
		    						</button>
		    						<div className="dropdown-content">
					      				<button onClick = {this.toggleHigh}>High</button>
					      				<button onClick = {this.toggleModerate}>Moderate</button>
					      				<button onClick = {this.toggleLow}>Low</button>
		    						</div>
		  						</div>
							</div>
						</div>
					</div>
					<h1 className = 'f2'> Choose your Champion </h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList legends={filteredLegends} />
				</div>
			);
		}
	}
}

export default App; 