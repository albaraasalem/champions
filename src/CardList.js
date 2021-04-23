import React from 'react';
import Card from './Card';  

const CardList = ({legends}) =>{
	return(
		<div>
			{
				legends.map((user, i) => {
					return (
						<Card 
						key= {i} 
						id= {legends[i].id} 
						name = {legends[i].name} 
						role = {legends[i].role} 
						difficulty = {legends[i].difficulty}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList; 