const argv = require('yargs')
    .command('create', 'create task to do', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Describe the tast to do'
        },

    })
    .command('update', 'update task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Describe the tast to do'
        },
        complete: {
            demand: true,
            alias: 'c',
            desc: 'Describe the tast to do',
            default: true
        }
    })
    .command('delete', 'update task', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Describe the tast to delete'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
};