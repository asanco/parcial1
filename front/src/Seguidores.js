import React, {Component} from 'react';
import './Seguidores.css';

class Seguidores extends Component {

    mostrarSeguidores() {
        const cards = this.props.currentFollowers.map(follower => {
            return (
                <div className="thumbnail" key={follower.id}>
                    <div className="justify-content-center"> <h5>{follower.user}</h5>
                    
                    <button className="btn btn-success">
                            Seguidores
                        </button>

                        </div>
                    <img  src={follower.pic} alt="imagen perfil de github" height="100" width="100"/>

                </div>
            )
        });
        if (cards.length === 0) {
            return (<div></div>)
        }
        return (
            <div className="col-12">
                {cards}
            </div>
        )
    }

    onEnterPress(e, callback) {
        const keyCode = e.keyCode || e.which;
        if (keyCode !== 13) {
            return;
        }
        const value = e.currentTarget.value;
        callback(value);
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-6 input-group">
                        <input type='text' placeholder="Escribe un nombre de usuario y presiona 'Enter' " className="col-12"
                               onKeyPress={(e) => this.onEnterPress(e, (val) => this.searchFollower(val))}
                               ref={(input) => this.input = input}/>
                     
                        
                    </div>
                </div>
               
                <div className="row justify-content-center">
                    <li>{this.mostrarSeguidores()}</li>
                </div>

            </div>
        );
    }

}
export default Seguidores;