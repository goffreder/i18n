import I18n from 'I18n';

@I18n
export default class Test extends React.Component {
    render() {
        return (
            <div>{this.l6e('IT_WORKS')}</div>
        );
    }
}
