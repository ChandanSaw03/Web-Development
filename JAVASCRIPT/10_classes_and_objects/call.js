function SetUsername(username){
    //Complex DB calls
    this.username=username;
};

function CreateUsername(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new CreateUsername("chai","chai@fb.com","123")
console.log(chai);