import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LineExample from './line';

class LinFib extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            fibNumber: null,
            fibSeries:[],
            ticks: 0,
            fibData: {}


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    fib(n) {
        let result = [];
        let ticks = 0;
        for (let i = 1; i <= n; i++){
            ticks++
            if (i === 1) {
                this.state.fibData[i] = ticks;
                this.setState({fibData: this.state.fibData});
                result.push(0);
            }
            else if (i === 2) {
                this.state.fibData[i] = ticks;
                this.setState({fibData: this.state.fibData});
                result.push(1)
            }
            else {
                this.state.fibData[i] = ticks;
                this.setState({fibData: this.state.fibData});
                result.push(result[i - 2] + result[i - 3]);
            }

        }
        this.setState({fibSeries: result})

    }

    handleChange(e) {
        this.setState({input: e.target.value})

    }

    handleClick(e) {
        e.preventDefault()
        this.fib(this.state.input)

    }

    render() {
        let fibList = this.state.fibSeries.map((fib, i )=> {
            return <li className="list-group-item" key={i + fib}>{fib}</li>
        })

        return (
            <div className="col-6">
                <form className="form-inline"  onSubmit={(e) => this.handleClick(e)}>
                    <div className="form-group">
                        <label className="mr-sm-2 mb-sm-0"> Enter A Number</label>
                        <input className="form-control  mr-sm-2 mb-sm-0" type="text" onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-primary" type="submit">See the Fib</button>
                </form>
                <LineExample labels={Object.keys(this.state.fibData)} data={Object.values(this.state.fibData)} label="Iterative"/>
                <ul className="list-group">
                    {fibList}
                </ul>
            </div>




        )

    }
}


export default LinFib;
