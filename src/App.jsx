import moment from 'moment';
import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import {v4 as uuidv4 } from 'uuid';
import Chirp from "./components/Chirp";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: uuidv4(),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            username: '',
            message: '',
            chirps: [],
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ username: '', message: '',
        chirps: [...this.state.message, {id:uuidv4(), username: this.state.username}]
    })

    }
    render() {
        return (
            <main className = "container">
                <section className="row justify-content-center mt-5">
                <div className="col-md-7">
                    <h1>Classy Chirper Project</h1>
                <form className="form-group">
                    <label>User Name:</label>
                    <input  
                        value={this.state.username}
                        onChange={e => this.setState({ username: e.target.value})}
                        className="form-control"
                    />
                    <label>Chirp:</label>
                    <input  
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value})}
                        className="form-control"
                        />
                    <button onClick={e => this.handleSubmit(e)} className="btn btn-primary">Add Chirp</button>
                </form>
                </div>
                <ul className="list-group">
                    {this.state.chirps.map(chirp => (
                        <li className="list-group-item" key={'chirp-username-${chirp.id}'}>{chirp.username}</li>

                    ))}
                </ul>
                
                </section>
            </main>
        );
     }
}         

           
    
export default App;