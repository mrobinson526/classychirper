import React from 'react';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from App Class Component</h1>
            </div>
        );
    }

}
  /*  const [username, setUsername] = useState("");
    const [usermsg, setUsermsg] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
    const data ={username, usermsg}
        if (username && usermsg) {
            setList((ls) => [...ls, data])
            setUsername(" ")
            setUsermsg(" ")
        } else {
            if (username || usermsg == null){
                e.preventDefault();
                alert("You must enter a username and message");
            }
            
        }
    }

    return (
       <div className = "App">
           <h1>Chirp Your Favorite Quote</h1>
           <Chirper username={"mrobinson526"} usermsg={'The most wonderful time of the year'} />
           <Chirper username={"mrobinson526"} usermsg={'Christmas is my favorite holiday!'} />
           <Chirper username={"mrobinson526"} usermsg={'Mistakes are evidence of being in the game of life'} />
           
           
           <form onSubmit = {handleSubmit}>
               <input type="text"  placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
               <input type="text"  placeholder="usermsg" value={usermsg} onChange={(e) => setUsermsg(e.target.value)} />
               <button>Chirp It!</button>
           </form>
           {
            list.map((a) => <div>
            <li>{a.username}</li>
            <li>{a.usermsg}</li>
            <DateTime />
        
            </div>
    )
           }
           
            
       </div>
    
    )
    
    } */
    
export default App;