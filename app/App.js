import Test from 'Test';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentLanguage: 'en'
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
                <button onClick={() => { this.setState({ currentLanguage: 'en' }); }}>English</button>
                <button onClick={() => { this.setState({ currentLanguage: 'it' }); }}>Italian</button>
                <Test />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
