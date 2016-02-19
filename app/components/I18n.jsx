const languages = {};

function importLanguage(language) {
    try {
        languages[language] = require('intl/' + language);

        return languages[language];
    } catch (e) {
        console.log(e);
        return false;
    }
}

function getLanguageNotFoundWarning(language) {
    return 'WARNING: Language ' + language + ' not found.';
}

export default (ComposedComponent) => {
    return class I15dComponent extends ComposedComponent {
        static displayName = ComposedComponent.name;

        static contextTypes = {
            currentLanguage: React.PropTypes.string
        };

        l6e = (key) => {
            let language = this.context.currentLanguage;

            if (!languages[this.context.currentLanguage]) {
                if (!importLanguage(this.context.currentLanguage)) {
                    console.warn(getLanguageNotFoundWarning(this.context.currentLanguage));

                    language = this.context.defaultLanguage;
                }
            }

            return languages[language][key] || `{${key}}`;
        };
    };
};
