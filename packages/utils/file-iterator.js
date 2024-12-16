const fs = require('fs')

const walkPath = '../components';

const iterator = function (dir, done, action) {
    fs.readdir(dir, function (error, list) {
        if (error) {
            return done(error);
        }

        let i = 0;

        (function next () {
            let file = list[i++];

            if (!file) {
                return done(null);
            }
            
            file = dir + '/' + file;
            
            fs.stat(file, function (error, stat) {
        
                if (stat && stat.isDirectory()) {
                    iterator(file, function (error) {
                        next();
                    }, action);
                } else {
                    // do stuff to file here
                    action(file)
                    next();
                }
            });
        })();
    });
};

// optional command line params
//      source for walk path
process.argv.forEach(function (val, index, array) {
    if (val.indexOf('source') !== -1) {
        walkPath = val.split('=')[1];
    }
});

// console.log('-------------------------------------------------------------');
// console.log('processing...');
// console.log('-------------------------------------------------------------');

// iterator(resolve(__dirname, walkPath), function(error) {
//     if (error) {
//         throw error;
//     } else {
//         console.log('-------------------------------------------------------------');
//         console.log('finished.');
//         console.log('-------------------------------------------------------------');
//     }
// });

module.exports = iterator;