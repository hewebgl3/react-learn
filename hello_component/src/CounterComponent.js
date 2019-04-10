import React ,{Component} from 'react'
class CounterCompnent extends Component{
    
    constructor(props){
        super(props);
        this.onClickIncrement = this.onClickIncrement.bind(this)
        this.state ={
            count:0
        }
    }

    onClickIncrement(){
        console.log(this)
        this.setState({count:this.state.count + 1});
    }

    render(){
        return <div>
            <button onClick={this.onClickIncrement}>+</button>
            {this.state.count}
            </div>;
    }
}

export default CounterCompnent