var bCrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
import db from '../config/db.config.js';
const User = db.users;

export default {
    initializePassport(passport) { 
        //serialize: initialization of the local strategy.
        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        // deserialize user 
        passport.deserializeUser(function(id, done) {
            User.findById(id).then(function(user) {
                if (user) {
                    done(null, user.get());
                } else {
                    done(user.errors, null);
                }
            });
        });

        // define our custome strategy with our instance of the LocalStrategy
        passport.use('local-signup', new LocalStrategy({
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            }, function(req, email, password, done) {
                // hashed password generating function
                var generateHash = function(password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                };

                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {
                    if (user) {
                        return done(null, false, {
                            message: 'That email is already taken'
                        });
                    } else {
                        var userPassword = generateHash(password);
                        console.log(req.body.role);
                        var data = {
                                email: email,
                                password: userPassword,
                                firstname: req.body.firstname,
                                lastname: req.body.lastname,
                                role: req.body.role
                            };
                
                        User.create(data).then(function(newUser, created) {
                            if (!newUser) {
                                return done(null, false);
                            }
                            if (newUser) {
                                return done(null, newUser);
                            }
                        });
                    }
                });
            }
        ));
 
        //LOCAL SIGNIN
        passport.use('local-signin', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        }, function(req, email, password, done) {
            // var User = user;
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
    
                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function(err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));
    },
    isAuthenticated(req, res, done){ 
        // Passport adds the isAuthenticated function in req body when successfully authenticated, removes when session expired or user logs out
        if (req.isAuthenticated()) {
            done()
        }
        else {
            return res.status(401).send('only for logged in users')
        }
    }
}