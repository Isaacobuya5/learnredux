
class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score : 0
        }
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore(event) {
        event.preventDefault();
        this.setState({
            score: this.state.score + 1
        })
    }

    decrementScore(event) {
        event.preventDefault();
        this.setState({
            score: this.state.score - 1
        })
    }
    render() {
        return (
            <div>
    <p>My favorite animal is {this.props.name}</p>
        <p>Initial value is {this.state.score}</p>
    <button onClick={this.incrementScore}>+</button>
    <button onClick={this.decrementScore}>-</button>
            </div>
        )
    }
}

ReactDOM.render(<HelloComponent name="Elephant" />, document.getElementById("app"));