const userSchema = require("../models/Users");
const bcrypt = require ("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await userSchema.findOne({ email });
  

    if (checkEmail) {
      return res.status(400).send("user already exist");
    }
//if email not exist the system will create the new user
    const newUser =  new userSchema(req.body);
//Hash password / creaptage de mot de passe
    const saltRounds=10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password,salt);
    // set the new hashed password
    newUser.password = hash
    await newUser.save();
    res.status(200).send("user created")

  } catch (err) {
    res.status(500).send("can't add user");
    console.log(err);
  }
};

exports.login = async (req,res)=>{
  try {
    const {email,password}=req.body
    const checkEmail= await userSchema.findOne({email});
    
    if(!checkEmail){
      return res.status(400).send("there is no user")}

  //checking password 
    const match = await bcrypt.compare(password,checkEmail.password)

    if(!match){return res.status(400).send("wrong password")}
 

    res.status(200).send({msg:"welcome",checkEmail})

  } catch (err) {
    res.status(500).send("please verify your login and password");
    console.log(err)
  }
}
