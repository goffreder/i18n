var Transifex = require('transifex');

var language;

if (process.argv.length === 3) {
    language = process.argv[2];
}

var username = 'emanuele.biancardi@wyscout.com';
var password = 'broccofex';

var projectSlug = 'wyscout-graphics';
var resourceSlug = 'wyscout3dpo';

var transifex = new Transifex({
    project_slug: projectSlug,
    credential: [username, password].join(':')
});

function handleTransifex(err, data, type) {
    if (err) {
        if (err.response.statusCode === 404) {
            console.log('Language ' + language + ' not available.');
            return;
        }

        console.log(err.response.statusCode);
    }

    console.log(type);
}

transifex.translationInstanceMethod(
    projectSlug,
    resourceSlug,
    language,
    { mode: 'translator' },
    handleTransifex
);
