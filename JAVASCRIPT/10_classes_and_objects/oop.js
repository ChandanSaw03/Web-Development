const user={
    username:"Chandan",
    loginCount:8,
    signedIn:true,
    getUserDetails:function(){
        //console.log("Got user details from database");
        // console.log(`Username: $(this.username)`)
        console.log(this)
    }
}
// console.log(user.username);
// console.log(getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    //return this
}
const userOne=new User("chandan",12,true)
const userTwo=new User("ChaiAurCode",12,false)
console.log(userOne);
console.log(userTwo);