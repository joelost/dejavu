if (!global.evaluated) {
    require('./util/adapter.js');
}

var path = (!(typeof window !== 'undefined' && window.navigator && window.document)) ? 'node/strict' : 'amd/strict';

global.modules = [
    path + '/Class',
    path + '/AbstractClass',
    path + '/Interface',
    path + '/FinalClass',
    path + '/instanceOf',
    path + '/options',
    path + '/lib/hasDefineProperty',
    'specs/cases/Emitter'
];
global.build = 'amd/strict';

// As of requirejs 2.1 requirejs is also async in node
// But if we call it directly by id it has sync behavior
if (!global.browser) {
    define('specs/verifications');
    define('specs/functional');
} else {
    define(['specs/verifications', 'specs/functional']);
}