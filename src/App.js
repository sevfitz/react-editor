import React, { Component } from 'react';
import './App.css';

const shortHeader = <h2>My Short Message</h2>;
const longHeader = <h1>My Long Message</h1>;

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: props.initialMessage || 'Hello World',
            color: '#3fa846',
            radio1: props.initialValue || 'Enter Label',
            radio2: props.initialValue || 'Enter Label',
            radio3: props.initialValue || 'Enter Label',
            dropdown1: props.initialDrop || 'Type Dropdown Choice 1',
            dropdown2: props.initialDrop || 'Type Dropdown Choice 2',
            dropdown3: props.initialDrop || 'Type Dropdown Choice 3',
        };
    }

    handleChange({ name, value }) {
        this.setState({
            [name]: value
        });
    }

    render() {
        const header = this.state.message.length < 20 ? longHeader : shortHeader;
        const dropdownStyle = {
            width: '150px',
            color: '#781f91'

        };

        return (
            <div>
                {header}
                <div>
                    <label>
                        Message:
                        <input name="message" value={this.state.message} onChange={({ target }) => this.handleChange(target)} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Color:
                        <input name="color" value={this.state.color} type="color" onChange={({ target }) => this.handleChange(target)} />
                    </label>
                </div>
                <div className="display" style={{
                    color: this.state.color
                }}>
                    {this.state.message}
                </div>
                <br/>
                <br/>


                <div>
                    <label>
                        <input name="radio1" value={this.state.radio1} onChange={({ target }) => this.handleChange(target)} />
                        {this.state.radio1} 
                    </label>
                    <input type="radio" name="some-choices" value="choice" />
                    <br/>
                    <br/>
                    <label>
                        <input name="radio2" value={this.state.radio2} onChange={({ target }) => this.handleChange(target)} />
                        {this.state.radio2} 
                    </label>
                    <input type="radio" name="some-choices" value="choice" />
                    <br/>
                    <br/>
                    <label>
                        <input name="radio3" value={this.state.radio3} onChange={({ target }) => this.handleChange(target)} />
                        {this.state.radio3} 
                    </label>
                    <input type="radio" name="some-choices" value="choice" />
                    <br/>
                    <br/>


                    <input name="dropdown1" style={dropdownStyle} value={this.state.dropdown1} onChange={({ target }) => this.handleChange(target)} />
                    <br/>
                    <input name="dropdown2" style={dropdownStyle} value={this.state.dropdown2} onChange={({ target }) => this.handleChange(target)} />
                    <br/>
                    <input name="dropdown3" style={dropdownStyle} value={this.state.dropdown3} onChange={({ target }) => this.handleChange(target)} />
                    <br/>
                    <br/>
                    <select>
                        <option value="1">{this.state.dropdown1}</option>
                        <option value="2">{this.state.dropdown2}</option>
                        <option value="3">{this.state.dropdown3}</option>
                    </select> 


                </div>
            </div>
        );
    }
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


