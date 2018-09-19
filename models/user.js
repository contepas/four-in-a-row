const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    gamertag: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
    }
});

//authentication
UserSchema.statics.authenticate = function (gamertag, password, callback){
    User.findOne({gamertag: gamertag})
        .exec(function (error, user) {
            if (error){
                return callback(error);
            } else if ( !user){
                const err = new Error('Gamer not found');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function(error, result) {
                if (result === true){
                    return callback(null, user);
                } else {
                    return callback();
                }
            });
        });
};

//call pre-method on the UserSchema to hash password befora sving into database
UserSchema.pre('save', function(next){
    const user = this;

    bcrypt.hash(user.password, 10, function(err, hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    })
});

const User = mongoose.model('User', UserSchema);
module.exports = User;