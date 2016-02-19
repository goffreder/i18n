import Test from 'Test';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentLanguage: 'en_GB'
        };
    }

    static childContextTypes = {
        currentLanguage: React.PropTypes.string
    };

    getChildContext() {
        return {
            currentLanguage: this.state.currentLanguage
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ currentLanguage: 'en_GB' }); }}>English</button>
                <button onClick={() => { this.setState({ currentLanguage: 'it_IT' }); }}>Italian</button>
                <button onClick={() => { this.setState({ currentLanguage: 'en_SP' }); }}>Spanish</button>
                <Test />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
