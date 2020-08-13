// import React from 'react';
// import { Form ,Button, Container,Col,Dropdown} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

    class mapForm extends Component {
      constructor() {
        var today = new Date();
        var currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        super();
        this.state = {
          address: '',
          food: false,
          drugs: false,
          date:currentDate,
          volunteer:''
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

      }

      onCheck=(e)=>{
          this.setState({[e.target.name]:e.target.checked})

      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { address, food, drugs, date,volunteer } = this.state;
      }

      render() {
        const { address, food, drugs, date, volunteer } = this.state;
        return (
            <div id="mapForm">
            <Container>
          <form onSubmit={this.onSubmit}>
          <label>Address:</label><br/>
            <input type="text" name="address" value={address} onChange={this.onChange} />
            <br/>
            <label>Food:</label>
            <input type="checkbox" name="food"  defaultChecked={this.state.food} onChange={this.onCheck}  />
            <br/>
            <label>drugs:</label>
            <input type="checkbox" name="drugs" defaultChecked={this.state.drugs} onChange={this.onCheck}/>
            <br/>

            <DayPickerInput name="date" value={date} onDayChange={day => console.log(day)}onChange={this.handleChnage} />
            <br/>

            <select name="volunteer">
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <br/>

            <button type="submit">Submit</button>
          </form>
          </Container>
          </div>
        );
      }
    }

    export default mapForm;