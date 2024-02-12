const model = require('../models');

const fetch_user = function() {
    return model.User.find();
}

const createUser = function(req) {
    console.log("entered service", req);
    return  model.User.create(req);
}

module.exports = {
    fetch_user,
    createUser
}