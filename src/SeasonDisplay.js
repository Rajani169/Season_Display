import React from 'react';
import './SeasonDisplay.css';

function getSeason(lat, month){
if(month>2 && month<9){
    return lat>0 ? 'summer': 'winter';
} 
else{
    return lat>0 ? 'winter': 'summer';
}
}

const  SeasonDisplay = props =>{

    const season = getSeason(props.latitude, new Date().getMonth());
    if(season==='summer'){
        return(
            <div className="ui container season summer">
                <i className="sun icon icon-left massive"></i>
             <h1 className="season">Lets hit the beech!!</h1>
             <i className="sun icon icon-right massive"></i>
            </div>
        );
    }
    else{
        return(
        <div className="ui container season winter">
        <i className="snowflake icon icon-left massive"></i>
        <h1 className="season">Chilly winter!!</h1>
        <i className="snowflake icon icon-right massive"></i>
       </div>
        );
    }

}

export default SeasonDisplay;


