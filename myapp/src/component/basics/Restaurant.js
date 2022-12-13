import React, { useState } from 'react';
import players from './PlayersApi';
import Playercard from './Playercard';
import Playerbar from './Playerbar';
// using the map function we gonn fech only ctegory



const Restaurant = () => {

    const category =[
        ... new Set( players.map((categorydata)=>{
              return categorydata.grade;
          })
        ),"All"
       ];

    const [playersData, setPlayerData] = useState(players);
    console.log(players);
    const filteritem = (grade) => {
        const updatedList = players.filter((updtEle) => {
            if(updtEle.grade === "All"){
               setPlayerData(players);
            }

            return updtEle.grade === grade;
            
        });
        setPlayerData(updatedList);
    };


    return (
        <>
            <Playerbar  filteritem = {filteritem} category = {category}/>
            <Playercard playersData={playersData} />
        </>
    )
}

export default Restaurant
