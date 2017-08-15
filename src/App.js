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
            fontFamily: 'Helvetica',
            fontWeight: 'normal',
            fontSize: '1em',
            border: 'solid 1px black'
        };
    }

    handleChange({ name, value }) {
        console.log('name is', name, 'value is', value);
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
        const weights = {
            normal: 'normal',
            lighter: 'lighter',
            bolder: 'bolder'
        };
        const fonts = {
            helvetica: 'Helvetica',
            times: 'Times New Roman',
            verdana: 'Verdana'
        };
        const sizes = {
            reg: '1em',
            big: '2em',
            bigger: '6em'
        };
        const borders = {
            reg: 'solid 1px black',
            new: 'solid 2px blue',
            odd: 'dashed 5px red'
        };


        return (
            <div>
                {header}
                <div>
                    <label>
                        Message:
                        <input name="message" style={{ width:'300px' }} value={this.state.message} onChange={({ target }) => this.handleChange(target)} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Color:
                        <input name="color" value={this.state.color} type="color" onChange={({ target }) => this.handleChange(target)} />
                    </label>
                </div>


                <br/>
                <div>
                  Default Font Choices:
                    <br />
                    <input name="font1" style={dropdownStyle} value={fonts.helvetica} onChange={({ target }) => this.handleChange(target)} />
                    <br />
                    <input name="font2" style={dropdownStyle} value={fonts.times} onChange={({ target }) => this.handleChange(target)} />
                    <br />
                    <input name="font3" style={dropdownStyle} value={fonts.verdana} onChange={({ target }) => this.handleChange(target)} />
                    <br />
                    <br />
                  Select the font to display:
                    <br />
                    <select name="fontFamily" value={this.state.fontFamily} onChange={({ target }) => this.handleChange(target)}>
                        <option value={fonts.helvetica}>{fonts.helvetica}</option>
                        <option value={fonts.times}>{fonts.times}</option>
                        <option value={fonts.verdana}>{fonts.verdana}</option>
                    </select>
                </div>
                <br/>
                <br/>


                <div>
                    Default Font Weights:
                    <br/>
                    <form>
                        {weights.normal}
                        <input type="radio" name="fontWeight" value={weights.normal} onClick={({ target }) => this.handleChange(target)} />
                        {weights.lighter} 
                        <input type="radio" name="fontWeight" value={weights.lighter} onClick={({ target }) => this.handleChange(target)}  />
                        {weights.bolder} 
                        <input type="radio" name="fontWeight" value={weights.bolder} onClick={({ target }) => this.handleChange(target)} />
                    </form>
                    <br/>
                    <br/>
                </div>
                
                <div>
                    Default Font Sizes:
                    <br/>
                    <form>
                        {sizes.reg}
                        <input type="radio" name="fontSize" value={sizes.reg} onClick={({ target }) => this.handleChange(target)} />
                        {sizes.big} 
                        <input type="radio" name="fontSize" value={sizes.big} onClick={({ target }) => this.handleChange(target)}  />
                        {sizes.bigger} 
                        <input type="radio" name="fontSize" value={sizes.bigger} onClick={({ target }) => this.handleChange(target)} />
                    </form>
                    <br/>
                    <br/>
                </div>
                
                <div>
                    Borders:
                    <br/>
                    <form>
                        Regular border:
                        <input type="radio" name="border" value={borders.reg} onClick={({ target }) => this.handleChange(target)} />
                        New border:
                        <input type="radio" name="border" value={borders.new} onClick={({ target }) => this.handleChange(target)}  />
                        Odd border:
                        <input type="radio" name="border" value={borders.odd} onClick={({ target }) => this.handleChange(target)} />
                    </form>
                    <br/>
                    <br/>
                </div>
                <div className="display" style={{
                    color: this.state.color,
                    fontFamily: this.state.fontFamily,
                    fontWeight: this.state.fontWeight,
                    width: '500px',
                    height: '200px',
                    border: this.state.border,
                    fontSize: this.state.fontSize
                }}>
                    {this.state.message}
                </div>

            </div>
        );
    }
}

export default App;
