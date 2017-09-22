import React, {Component} from 'react';
import './App.css';
import SeguidoresContainer from "./SeguidoresContainer";

class App extends Component {

    render() {
        const styleTitle = {
            color: 'purple',
            padding: '40px',
            margin:'5px'
                };

                return (
                    <div className = 'jumbotron'>
                        <h1 style={styleTitle}>GitHub ¿Quién sigue a quién?</h1>
                        <SeguidoresContainer/>
                    </div>
                );
        
    }
}

export default App;