var mongoose = require( 'mongoose' )

mongoose.connect("mongodb+srv://Said:brg76htq@cluster0-knql9.azure.mongodb.net/test?retryWrites=true",{useNewUrlParser:true,useCreateIndex:true})
.then((con) => console.log("Connected to Mongo"))
.catch(err => console.log("UPPS:" + err))


setTimeout(() => {
    mongoose.disconnect(() => console.log("Disconnected")); 
}, 3000);



var userSchema = new mongoose.Schema({
  userName: String,
  email: {type: String, unique:true},
  created : {type: Date, default: Date.now}
});
// Build the User model
var User = mongoose.model( 'User', userSchema );

async function addUser(userName,email){
var user = new  User({userName,email})
await user.save();
}


async function testAddUser(){
  try{
    await User.deleteMany({});
    await  addUser("Darkdrmsx","123@.dk");
  await addUser("BABU","1234@.dk");
  await addUser("Donk","123s@.dk");
  await addUser("lolison","123ss@.dk");
  await addUser("hejsa","1232222@.dk");
  await  addUser("buuuh","123aaas@.dk");
  await  addUser("Kurt Wonnegut","kw@.dk");
  await  addUser("Hanne Wonnegut","hw@.dk");
  await  addUser("ib Wonnegut","i@.dk");
  console.log("User has been added");
  }catch(err){
      console.log("ERROR user cant be added" + err);
  }

}

async function findUser(fields,projection){
 return await User.find({userName: /Wonnegut/i},{userName: 1})
 .sort({userName:1})
 .collation({locale: "da"}) // løser små og store starts bogstaver i sort
 .limit(3)
//return await User.find(fields,projection)
}

async function testFindUser(){
var users = await findUser("ddd","ddd");
console.log(users);
}


async function editUser(){
var user = await User.findOneAndUpdate(
    {userName:"Donk"},
    {email: "abekage@live.com"},
    {new:true}
)
console.log("Updated User:" + user)
}

async function DeleteUser(){
    await User.findOneAndRemove({userName: "Donk"});
    var user = User.findOne({userName:"Donk"});
        
    
    console.log("Status:" + (user === null))
    }
    
//testAddUser(); //create
//testFindUser(); //read
//editUser();  //update
//DeleteUser(); //delete