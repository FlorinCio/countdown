import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline:'December 31, 2020',
      newDeadline: ''
    }
  }

changeDeadline(){
  this.setState({deadline: this.state.newDeadline})
}

  render() {
    return(
        <div className="App">
          <div className="App-title">
          Countdown to {this.state.deadline}
          </div>
          <Clock
deadline={this.state.deadline}
          />
          <Form>
         <div className="row">

          <div className="col-4">

            </div>
          <div className="col-4">
          <FormControl
          className="Deadline-input"
           placeholder='new date'
           onChange={event => this.setState({newDeadline: event.target.value})}
           /> </div>
          <div class="col-4">  </div>
          </div>
            <Button onClick={()=>this.changeDeadline()}>
            Submit
            </Button>
          </Form>
         </div>
    )

  }

}
export default App;
