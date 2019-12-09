
class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
        this.incrementScore = this.incrementScore.bind(this);
        this.decrementScore = this.decrementScore.bind(this);
    }

    incrementScore(event) {
        event.preventDefault();
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore(event) {
        event.preventDefault();
        this.setState({
            score: this.state.score - 1
        });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                "My favorite animal is ",
                this.props.name
            ),
            React.createElement(
                "p",
                null,
                "Initial value is ",
                this.state.score
            ),
            React.createElement(
                "button",
                { onClick: this.incrementScore },
                "+"
            ),
            React.createElement(
                "button",
                { onClick: this.decrementScore },
                "-"
            )
        );
    }
}

ReactDOM.render(React.createElement(HelloComponent, { name: "Elephant" }), document.getElementById("app"));
