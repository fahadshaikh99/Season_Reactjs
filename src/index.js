import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  // constructor(props){
  //   super(props);

  //   this.state = { lat: null}
  // }
  render(){

    // window.navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       this.setState({ lat: position.coords.latitude});
    //       console.log(position)
    //     },
    //     (err) => console.log(err) 
    // );

    return (
        // <div>Latitude : {this.state.lat} </div>
        <div>Hello To world</div>
    );
}

}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);