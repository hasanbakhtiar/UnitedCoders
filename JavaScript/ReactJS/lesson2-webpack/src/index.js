import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import photo from './img/unsplash.jpg' 
class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello React with Webpack</h1>
            <img width={150} src={photo} alt="" />
            </>
        )
    }
}



ReactDOM.render(<App />,document.querySelector('#root'));