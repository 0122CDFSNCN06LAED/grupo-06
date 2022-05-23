const path = require("path");
const fs = require("fs");
const { text } = require("express");
const {check} = require("express-validator")

const userFilePath = path.join(__dirname, "../database/users.json");

const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));

const userController = {
  login: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/login.ejs");
    res.render(htmlPath);
  },
  processLogin: function (req, res){
        let error = validationResult(req);
        if(error.isEmpty()) {const userFilePath = path.join(__dirname, "../database/users.json");



        const user = JSON.parse(fs.readFileSync(userFilePath, "utf-8"));
        for (let i = 0; i < user.length; i++) {
          if (user[i].email == req.body.email) {
            if (bcrypt.compareSync(req.body.password, user[i].password)) {
              let usuarioAlloguearse = user[i];
              break;
            } 
    
          } 
        } if (usuarioAlloguearse == undefined) {
          return res.render('login',{errors: [{
            msg:('credenciales invalidas')
          }]});
        }

          req.session.usuariologueado = usuarioAlloguearse;

          

        }else{
          return res.render("login",{errors:errors.errors})
        }
  }, 


  
  register: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
    res.render(htmlPath);
  },




  //addUser: function (req, res) {
  //  let htmlPath = path.resolve("./src/views/user/registerUser.ejs");
  //  res.render(htmlPath);
  //},

  storeUser: (req, res) => {
    //res.send(req.body); 

    const lastIndex = user.length - 1;
    const lastUser = user[lastIndex];
    const biggestId = lastUser ? lastUser.id : 0;
    const newUserID = biggestId + 1;

    const newUser = {
      ...req.body,
      id: newUserID,
    };

    user.push(newUser);

    const jsonTxt = JSON.stringify(user, null, 2);
    fs.writeFileSync(userFilePath, jsonTxt, "utf-8");

    res.redirect("/user/login");
  },

  registerUserOrHelper: function (req, res) {
    let htmlPath = path.resolve("./src/views/user/registerUserOrHelper.ejs");
    res.render(htmlPath);
  },
};


module.exports = userController;

