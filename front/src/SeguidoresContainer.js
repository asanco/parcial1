import React, {Component} from 'react';

import Seguidores from "./Seguidores";

class SeguidoresContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {searchHistory: [], currentFollowers: [], };
    }
    

    render() {
        return React.createElement(Seguidores, {
            searchHistory: this.state.searchHistory,
            currentFollowers: this.state.currentFollowers,
        });
    }
}

export default SeguidoresContainer;