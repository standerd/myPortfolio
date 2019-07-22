import React, {Component} from 'react';
import './Game.css';
import CaseSelection from '../../containers/CaseSelection/CaseSelection'
import Landing from '../../containers/landing/landing'
import {Route, Switch} from 'react-router-dom'

class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            caseNo:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            randomCases:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            openCases:[
                {value: 0.01,img: "v1"}, {value: 0.05,img: "v2"}, {value: 0.1,img: "v3"},
                {value: 0.2,img: "v4"}, {value: 0.5,img: "v5"}, {value: 1,img: "v6"},
                {value: 5,img: "v7"}, {value: 10,img: "v8"}, {value: 20,img: "v9"},
                {value: 50,img: "v10"}, {value: 100,img: "v11"}, {value: 250,img: "v12"},
                {value: 500,img: "v13"}, {value: 750,img: "v14"}, {value: 1000,img: "v15"},
                {value: 5000,img: "v16"}, {value: 10000,img: "v17"}, {value: 20000,img: "v18"},
                {value: 50000,img: "v19"}, {value: 100000,img: "v20"}, {value: 250000,img: "v21"},
                {value: 500000,img: "v22"}, {value: 750000,img: "v23"}, {value: 1000000,img: "v24"}
            ]
        }
}


    render() {
        let userCase = 0;
        let userValue = 0;

        

          const imgClicked = e => {
            let caseSel = e.currentTarget.dataset.id;
            let imgClick = document.getElementById(caseSel);
            imgClick.classList.add("yourCase");
            userCase = this.state.randomCases[caseSel-1];
            userValue = this.state.openCases[userCase-1].value;
            console.log(userCase);
            console.log(userValue);
            console.log(caseSel);
          };
          

        return(
            <div>
            <Route path="/" exact
            component={Landing}/>
            <Route path="/select" 
            render ={(props) => <CaseSelection {...props}
            imgRemain = {this.state.caseNo}
            imgClicked = {imgClicked}
            randomCases = {this.state.randomCases}/>} />
            </div>
            
        )
    }
}

export default Game;

