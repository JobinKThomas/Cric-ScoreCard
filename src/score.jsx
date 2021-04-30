import React, { Component } from 'react';
import './App.css'; 

class Score extends Component {
    state = { 
        runs : 0,
        wickets : 0,
        balls : 0,
        over :0,
        runsArr :[],
        last : 0,

     }
      addRuns=(elem)=> {  //add runs and wickets
        this.state.runsArr.join("");
        switch(elem) {
            case "zero":
                this.setState({ runs: this.state.runs + 0})
                this.state.runsArr.unshift("0");
                break;
            case "one":
                this.setState({ runs: this.state.runs + 1})
                this.state.runsArr.unshift(1);
                break;
            case "two":
                this.setState({ runs: this.state.runs + 2}) 
                this.state.runsArr.unshift(2);
                break;
            case "three":
                this.setState({ runs: this.state.runs + 3})
                this.state.runsArr.unshift(3);
                break;
            case "four":
                this.setState({ runs: this.state.runs + 4})
                this.state.runsArr.unshift(4);
                break;
            case "five":
                this.setState({ runs: this.state.runs + 5})
                this.state.runsArr.unshift(5);
                break;
            case "six":
                this.setState({ runs: this.state.runs + 6})
                this.state.runsArr.unshift(6);
                break;
            case "wicket":
                this.addWicket();
                break;				
        }
        {this.handleOver()}
    }
    handleOver = () => {
        this.setState({ balls: this.state.balls + 1});
        this.setState({ last: this.state.last + 1});
        if (this.state.balls === 5){
                this.setState({ balls: this.state.balls = 0});
                this.setState({over: this.state.over +1});                
        } 
        if( this.state.last % 6 ===0  ){
            this.setState({runsArr: this.state.runsArr.splice(0,1)})
        }
    }
    addWicket=()=> {
        if(this.state.wickets < 10) {
            this.setState({ wickets: this.state.wickets + 1});
            this.state.runsArr.unshift("W");
        } else {
            alert("ALL OUT!");
            this.state.balls = this.state.balls - 1;
        }
        {this.handleOver()}
    }
    addExtra=(elem)=> {
        this.state.runsArr.join("");
        switch(elem) {
            case "wide":
                this.setState({ runs: this.state.runs + 1})
                this.state.runsArr.unshift("WD");
                break;
            case "NB":
                this.setState({ runs: this.state.runs + 1})
                this.state.runsArr.unshift("NB");
                break;
            case "LB":
                this.setState({ runs: this.state.runs + 1}) 
                this.state.runsArr.unshift("LB");
                {this.handleOver()}
                break;
        }
    }
    
    render() { 
    return ( 
    <div>
    <a href="https://github.com/JobinKThomas">@jobin</a>
    <h1 >CRIC SCORE_CARD</h1>
	<div id="score">
	<p id="wickets">{this.state.runs}</p>
	<p>/</p>
	<p id="runs"> {this.state.wickets}  </p>
	<p>(</p><p id="balls">{this.state.over}.{this.state.balls}</p><p>)</p></div><br />
    <h3>RR : {((this.state.runs)/((this.state.over)+((this.state.balls)/6)))}</h3><br />
	<input type="button" id="zero" value="0" onClick={this.addRuns.bind(this,"zero")}/>
	<input type="button" id="one" value="1" onClick={this.addRuns.bind(this,"one")}/>
	<input type="button" id="two" value="2" onClick={this.addRuns.bind(this,"two")}/>
	<input type="button" id="three" value="3" onClick={this.addRuns.bind(this,"three")}/>
	<input type="button" id="four" value="4" onClick={this.addRuns.bind(this,"four")}/>
	<input type="button" id="six" value="6" onClick={this.addRuns.bind(this,"six")}/>
    <input type="button" id="wicket" value="W" onClick={this.addWicket.bind(this,"wicket")}/>
    <br></br>
    <h3>Extras</h3>
    <input type="button" id="wide" value="WD" onClick={this.addExtra.bind(this,"wide")}/>
	<input type="button" id="NB" value="NB" onClick={this.addExtra.bind(this,"NB")}/>
	<input type="button" id="LB" value="LB" onClick={this.addExtra.bind(this,"LB")}/>
	<h3>This Over</h3><br />
	<p id="timeline">{this.state.runsArr}</p>
    </div>
    );
    }
}
 
export default Score;