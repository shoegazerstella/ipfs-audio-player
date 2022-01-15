import React from "react";
import Player from "./Player"

export default class Search extends React.Component {

    state = {
        'cid': ""
    };
  
    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({cid: event.target.value})
        
    };

    render() {

        // render the player only if CID is not empty
        
        let player;

        if (this.state.cid) {
            player = <Player src={this.state.cid} /> }
        else {
            player = ""
        }

      return (
        <div>

            <input 
                style={{ height:"50px", width: "450px", paddingTop: '15px', paddingBottom: '15px', paddingLeft: '10px', paddingRight: '10px'}}
                value={this.state.cid}
                onChange={this.handleChange} 
            />

            {player}

        </div>
      );
    }
  }