import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Header} from './header';
import axiosURL from './components/axios-firebase';
import {List} from './components/list';

 const languages = ["Tamil", "English", "French", "German"];
 const onLangChange = lang => {
//alert(lang);
//this.setState({langu:lang}) ;
 // const [selected_item, setSelected] = useState("hjhkjhkj");
}
class App extends Component {
  constructor() {
    super();
    this.state = {   name: 'Vinod', postalcode: 600097, region:'Chennai'
    };

    const activateLasers =() =>{
    axios.post( 'https://fir-demo-3f4ee.firebaseio.com/region.json',
     { "username" : "Foobar" } , { params: { "UID": "AA11" }});


    }
   
  }
  
  render() {
    return (
      <div>
      
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
     
        </p>
     <Header />
   <button onclick="activateLasers()"> post message</button>
<List items={languages} onSelect={onLangChange}/>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
