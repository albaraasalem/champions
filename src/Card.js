import React from 'react'; 

const Card = ({name, role, difficulty, info}) =>{
	return(
		<div className = ' tc bg-dark-green dib br3 ps3 ma2 grow bw2 shadow-5'>
			<img alt = 'legends' src = {`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`} width = "350" height ="200"/>
			<div>
				<h2>{name}</h2>
				<p>Role: {role}</p>
				<p>Difficulty: {difficulty}</p>
			</div>
		</div>
	);
}

export default Card; 