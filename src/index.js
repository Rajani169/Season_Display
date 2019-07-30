import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            lat: null,
            errmsg: ""
        }
     }

     componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat:position.coords.latitude }),
            err =>this.setState({errmsg:err.message})
        );
     }

    
  render() {

    if(this.state.lat && !this.state.errmsg){
        return (
            <SeasonDisplay  latitude={this.state.lat} />
        );
       }
    if(!this.state.lat && this.state.errmsg){
        return (
                <div> errormessage={this.state.errmsg} </div>
            );
        }
         return (
            <div className="ui segment" style={{width: "100vw", height: "100vh"}}>
  <div className="ui active dimmer">
    <div className="ui text loader">Please Allow</div>
  </div>
  <p></p>
</div>
            );
         }
}


ReactDom.render(<App />, document.querySelector('#root'));