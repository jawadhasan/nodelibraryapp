
var User = function(args){

    var user = {};

    user.email = args.email;
    user.createdAt = args.createdAt || new Date();

    //todo: other properties
   
    return user;
};

module.exports = User;
