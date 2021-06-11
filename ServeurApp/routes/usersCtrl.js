// import
var nodemailer = require('nodemailer');
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils')
var models = require('../models');
var asyncLib = require('async');
const {router} = require('../apiRouter');
const { Router } = require('express').Router;
// constant
 const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$;/
// Routes
module.exports = {
register: function(req,res){
// Params
// generer mot passe
function entierAlea(min,max){
    return Math.floor(Math.random() *(max -min+1) +min)
}
console.log(req.body)
var Nom = req.body.Nom
var Prenom = req.body.Prenom
var email = req.body.email;
//var tel = req.body.tel
var role = req.body.role;
var password= Nom + entierAlea(1,1000);
sendMail(email, password)
if(email == null  || password == null){
    return res.status(400).json({'error':'paramètres manquants'})
}
// TODO vérifier la pseudo longueur, regex de messagerie, mot de passe ect
 models.User.findOne({
    atttibutes: ['email'],
    where: {email:email }
})
.then(function(userFound){
if (!userFound){
     if(!EMAIL_REGEX.test(email)){
        return res.status(400).json({'error':'email non valide'})
    }
    
bcrypt.hash(password,5,function(err , bcryptedPassword){
   // nouvel utilisateur
   var newUser = models.User.create({
       Nom:Nom,
       Prenom:Prenom,
       email:email,
      // tel:tel,
       role:role,
       password: bcryptedPassword,
       isAdmin:0
   }).then(function(newUser){
       return res.status(201).json({
         newUser
       })
   }).catch(function(err){
       return res.status(500).json({'error': 'impossible ajouter un utilisateur'})
   })
})
}else{
    return res.status(409).json({'error':'utilisateur existe deja'});
}
})
.catch(function(err){
 return res.status(500).json({'error':'impossible de vérifier utilisateur'})
})
},
//Connexion
login: function(req,res){
// params
var data = req.body;
const {email, password}=data
console.log(data)
if(email== null || password== null){
  return res.status(400).json({'error':'missing parameters'})
}
// controle si des caracters si utilisateur entre un seul caracter ou n'importe quoi bloquez
// ToDO verify mail regex & password length
models.User.findOne({
    where:{email:email}
})
.then(function(userFound){
if(userFound){
bcrypt.compare(password,userFound.password,function(errBycrypt,resBycrypt){
 if(resBycrypt){
    models.User.findAll().then(function(tasks){
        console.log(tasks);
        let userInfo ={
            'userId':userFound.id,
            'role':userFound.role,
             'prenom':userFound.Prenom,
            'nom':userFound.Nom,
            'token':jwtUtils.generateTokenForUser(userFound),
        }
        return res.status(200).json({userInfo,tasks});
    })
 }else{
     return res.status(403).json({"error":"invalid password"})
 }
})
}else{
    return res.status(404).json({'error':'user not exist in DB'})
}
})
.catch(function(err){
    return res.status(500).json({'error':'unable to verify user'})
})
},
// get profile
list:function(req,res){
    console.log('test')
    models.User.findAll().then(function(tasks){
        console.log(tasks);
        return res.status(200).json(tasks);
    })
},
getUserProfile:function(req,res){
// Getting auth header
userId = req.body.value;
console.log("***************************************************")
console.log(userId)
models.User.findOne({
    where: {id: userId }
}).then(function(user){
    console.log(user)
    return res.status(200).json({
        
        'userId':user.id,
        'role':user.role,
         'prenom':user.Prenom,
        'nom':user.Nom,
       
    });
})
},
// modifier un utilisateur
/* updateUserProfile: function(req, res){
    //Getting auth header
    var headerAuth = req.header['authorization']
    var userId = jwtUtils.getUserId(headerAuth)
// Params
var email = req.body.email
var password = req.body.password
var role = req.body.role;
var Prenom= req.body.Prenom;
var Nom = req.body.Nom;
asyncLib.waterfall([
    function(done){
models.User.findOne({
    attributes:['email','password','role','Prenom','Nom'],
    where: {id: userId }
}).then(function(userFound){
    done(null,userFound)
})
.catch(function(err){
    return res.status(500).json({'error':'unable to verify user'})
})
},
function(userFound,done){
    if(userFound){
        userFound.update({
            email: (email ? email : userFound.email),
            password: (password ? password : userFound.password),
            role: (role? role: userFound.role) ,
            Prenom: (Prenom? Prenom: userFound.Prenom),
            Nom: (Nom? Nom: userFound.Nom)
        }).then(function(){
            done(userFound)
        }).catch(function(err){
            res.status(500).json({'error':'cannot update user'})
        })
    }else{
        res.status(404).json({'error':'user not fount'})
    }
},
],function(userFound){
    if(userFound){
        return res.status(201).json(userFound)
    }else {
        return res.status(500).json({'error':'cannot update user profile'})
    }
})
}, */
// supprimer utilisateur
supp:function(req,res){
    id= req.body.delId.id
    console.log(id)
    models.User.destroy({
        where:{id}
    }).then(()=>{
        res.status(200).json({
            message : "suppression effectue"
        })
    })
    },
   // modification profil
   modifier:(req, res) => {
    data = req.body
    console.log(data)
     Prenom = data.Prenom
     Nom = data.Nom
    email= data.email
    role = data.role
    models.User.update(
        {
            Prenom: Prenom,
            Nom: Nom,
            role : role,
        },
       { where: { email }}
    )
    res.status(200).json({
        message : "modification effectue"
    })
    },
    oublier:(req,res)=>{
        var email
        email = req.body.email

        console.log(email)
        function entierAlea(min,max){
            return Math.floor(Math.random() *(max - min +1)) +min;
        }
        var password ='user' +entierAlea(1,1000);
        sendMail(email, password)
        console.log(password)
        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(password ,salt,(err,hash)=>{
                //create record
                models.User.update(
                    {
                        password:hash
                    },
                    {where:{email}}
                )
            })
        })

        res.status(200).json({
            message : "mot de passe changé effectue"
        })
    }
}
        //Envoie du mot de passe par mail
        sendMail = (email, password)=>{
            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                  user: "ghostland95@gmail.com",
                  pass: "ALxamdoulilAH"
                }
              });
              const options = {
                from:"mamemorthiampo@gmail.com",
                to:email,
                subject: email,
                text:`pass:${password}`,
                password:"Seneg@160"
              }
              transporter.sendMail(options,  function(err,info){
              if(err){
                console.log(e-rr);
                return;
              }
              console.log( "Sent:" + info.response);
              })
        }
