const service = require('../service');

const fetch_users = async function(req, res){
    const response = await service.userService.fetch_user();
    res.status(200).json(response);
}

const create_user = async function(req, res){
    console.log(req.body);
    const body = req.body;
    console.log("entered controller");
    const response = await service.userService.createUser(req.body);
    // const inp = new Users(body);
    // await inp.save();
    // await Users.create(body);
    res.status(200);
}

module.exports = {
    fetch_users,
    create_user
}