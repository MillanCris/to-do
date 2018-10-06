const argv = require('./config/yargs').argv;
const colors = require('colors');
const to_do = require('./To-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'create':
        console.log('comand create was ran');
        let response = to_do.create(argv.description)
        console.log(response);
        break;

    case 'list':
        let task_list = to_do.getList();
        for (let task of task_list) {
            console.log('============To Do================'.green);
            console.log(task.description);
            console.log(task.compleate);
            console.log('============To Do================'.green);

        }
        break;
    case 'update':
        console.log('comand update was ran');
        if (to_do.updateBd(argv.description, true)) {
            console.log('updated');
        } else {

            console.log('can be updated');
        }
        break;
    case 'delete':
        console.log('comand delete was ran');
        if (to_do.deleteBd(argv.description)) {
            console.log('deleted');
        } else {

            console.log('can be delete');
        }
        break;
}