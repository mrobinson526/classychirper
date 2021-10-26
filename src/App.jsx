import moment from 'moment';
import React from 'react';

import {v4 as uuidv4 } from 'uuid';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: uuidv4(),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            username: '',
            chirp: '',
            chirps: [],
            };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ username: '', chirp: ''},
        this.setState({chirps: [...this.state.chirps], id: uuidv4(), username: this.state.username, chirp: this.state.chirp})
        )   
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
                        value={this.state.chirp}
                        onChange={e => this.setState({ chirp: e.target.value})}
                        className="form-control"
                        />
                    <button onClick={e => this.handleSubmit(e)} className="btn btn-primary">Add Chirp</button>
                </form>
                {
                    this.state.chirps.map((chirp) => <div> 
                        <li>{chirp.username}</li>
                        <li>{chirp.chirp}</li>
                        <li>moments().timestamp</li>
                        </div> 
                        ) 
                       
                }
                </div>
        </section>
        
     </main>        
          );


    }
       
    }
    



           
    
export default App;