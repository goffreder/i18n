import en from 'intl/en_GB';
import it from 'intl/it_IT';

const languages = {
    en,
    it
};

export default (ComposedComponent) => {
    return class I15dComponent extends ComposedComponent {
        static displayName = ComposedComponent.name;

        static contextTypes = {
            currentLanguage: React.PropTypes.string
        };

        l6e = (key) => {
            return languages[this.context.currentLanguage][key] || `{${key}}`;
        };
    };
};
