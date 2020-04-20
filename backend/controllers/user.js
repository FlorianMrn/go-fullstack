// Import
const bcrypt = require('bcrypt');

// Import Model
const User = require('../models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then( hash => {
        const User = new User({
            email : req.body.email,
            password : hash
        });

        User.save()
        .then( () => res.status(201).json({ message : 'Utilisateur enregistré'}))
        .catch(err => res.status(400). json({ err }));
    })
    .catch(err => res.status(500). json({ err }));
}

exports.login = (req, res, next) => {
    User.findOne({ email : req.body.email})
        .then( user => {
            if (!user) {
                return res.status(401).json({ error : 'Utilisateur non trouvé' });
            } else {
                bcrypt.compare(req.body.password, user.password )
                .then( valid => {
                    if (!valid) {
                        return res.status(401).json({ error : 'Mot de passe incorrect' });
                    } else {
                        return res.status(200).json({
                            userId : user._id,
                            token : 'TOKEN'
                        });
                    };
                })
                .catch(err => res.status(500).json({ err }))
            }
        })
        .catch(err => res.status(500).json({ err }));
}