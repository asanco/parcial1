import React, {Component} from 'react';
import App from './App';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {currentComponent: 'SeguidoresLista'};
    }

    changeComponent(newComponent) {
        this.state({currentComponent: newComponent});
    }

    render() {
        return React.createElement(App, {
            currentComponent: this.state.currentComponent,
            changeComponent: () => this.state.changeComponent()
        });
    }
}

export default AppContainer;