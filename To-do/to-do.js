const fs = require('fs');

let to_do_list = [];

const loadDB = () => {
    try {
        to_do_list = require('../db/data.json');
    } catch (error) {
        to_do_list = [];
    }

}
const getList = () => {
    loadDB();
    return to_do_list;
}

const updateBd = (description, compleate = true) => {
    loadDB();
    let index = to_do_list.findIndex(task => { return task.description == description })
    if (index >= 0) {
        to_do_list[index].compleate = compleate;
        createBD();
        console.log(to_do_list);
        return true;
    }
    return false;
}


const deleteBd = (description) => {
    loadDB();
    let index = to_do_list.findIndex(task => { return task.description == description })
    if (index >= 0) {
        to_do_list.splice(index, 1);
        createBD();
        return true;
    }
    return false;
}

const createBD = (() => {
    let data = JSON.stringify(to_do_list);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            console.log(err);
        }
    })
});


/**
 * 
 * @param {*} description 
 */
const create = ((description) => {
    let to_do = {
        description,
        compleate: false
    };
    loadDB();
    to_do_list.push(to_do);
    createBD();


    return to_do;
});

module.exports = {
    create,
    getList,
    updateBd,
    deleteBd
}