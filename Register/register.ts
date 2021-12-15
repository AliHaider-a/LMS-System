
type dType =string | number;
// type rollno = number;

class RegisterForm{

    constructor(public username: dType, public email: dType, public password: dType, public roll: dType){

    }

}
class UserStructure {
   protected users: RegisterForm[];
   private static instance: UserStructure;

protected constructor(){
    this.users= [];
}

static getInstance() {
    if(this.instance){

        return this.instance
    }
    this.instance = new UserStructure();
    return this.instance;
}

addUser(username: string, email: string, password: string, roll: number){

    const userItem = new RegisterForm(username, email, password, roll);
                this.users.push(userItem);
                

}

}

const userState =  UserStructure.getInstance();


class GetData{

    userInput: HTMLInputElement;
    submitButton: HTMLButtonElement;

    constructor(){
this.userInput = document.querySelector('#UserName')! as HTMLInputElement;;

this.submitButton = document.getElementById('#registerBtn')! as HTMLButtonElement;
        this.submit()
    }

Handler(e: Event){

console.log("hello", e);

    
}

  private  submit(){
        console.log("hello submit", this.submitButton);
        this.submitButton.addEventListener('click', this.Handler.bind(this));
    }

}

const getData = new GetData();

function register() {
    document.getElementById("login")!.style.left = "-400px";
    document.getElementById("register")!.style.left = "50px";
    document.getElementById("btn")!.style.left = "110px";
}
function login() {
    document.getElementById("login")!.style.left = "50px";
    document.getElementById("register")!.style.left = "450px";
    document.getElementById("btn")!.style.left = "0px";
}