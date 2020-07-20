import React from 'react';

class Home extends React.Component{
    render(){
    return(
      <div>
        <h1>Pokemon <span>Records</span></h1>
        <button id="record-btn">Records(記録する)</button>
      </div>
    );
  }
}
export default Home;