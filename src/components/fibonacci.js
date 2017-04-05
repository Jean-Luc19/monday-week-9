import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import LineExample from './line';

class Fibonacci extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            fibNumber: null,
            fibSeries:[0,1],
            ticks: 0,
            fibData: {}


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    fib(n){
        this.setState({ticks: this.state.ticks++})
        if (n === 0){
          return 0
        }
        if (n === 1) {
          return 1
        }
        return  this.fib(n-2) + this.fib(n-1)
    }
    fibSeries (n) {
        let series = [0,1]
        for(let i = 2; i <= n; i++){
          series.push(this.fib(i))
          this.state.fibData[i] = this.state.ticks;
          this.setState({ticks: 0});
          this.setState({fibData: this.state.fibData});
        }
        return series
    }
    handleChange(e) {
        this.setState({input: e.target.value})

    }

    handleClick(e) {
        e.preventDefault()
        this.setState({fibSeries:this.fibSeries(this.state.input)})

    }

    render() {
        let fibList = this.state.fibSeries.length > 4 ? this.state.fibSeries.map((fib, i )=> {
            return <li className="list-group-item" key={i + fib}>{fib}</li>
        }) : '';

        return (
            <div className="col-6">
                <form className="form-inline"  onSubmit={(e) => this.handleClick(e)}>
                    <div className="form-group">
                        <label className="mr-sm-2 mb-sm-0"> Enter A Number</label>
                        <input className="form-control  mr-sm-2 mb-sm-0" type="text" onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-primary" type="submit">See the Fib</button>
                </form>
                <LineExample labels={Object.keys(this.state.fibData)} data={Object.values(this.state.fibData)} label="Recursive"/>
                <ul className="list-group">
                    {fibList}
                </ul>
            </div>




        )

    }
}


export default Fibonacci;
