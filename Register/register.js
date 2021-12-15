// type rollno = number;
var RegisterForm = /** @class */ (function () {
    function RegisterForm(username, email, password, roll) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.roll = roll;
    }
    return RegisterForm;
}());
var UserStructure = /** @class */ (function () {
    function UserStructure() {
        this.users = [];
    }
    UserStructure.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new UserStructure();
        return this.instance;
    };
    UserStructure.prototype.addUser = function (username, email, password, roll) {
        var userItem = new RegisterForm(username, email, password, roll);
        this.users.push(userItem);
    };
    return UserStructure;
}());
var userState = UserStructure.getInstance();
var GetData = /** @class */ (function () {
    function GetData() {
        this.userInput = document.querySelector('#UserName');
        ;
        this.submitButton = document.getElementById('#registerBtn');
        this.submit();
    }
    GetData.prototype.Handler = function (e) {
        console.log("hello", e);
    };
    GetData.prototype.submit = function () {
        console.log("hello submit", this.submitButton);
        this.submitButton.addEventListener('click', this.Handler.bind(this));
    };
    return GetData;
}());
var getData = new GetData();
function register() {
    document.getElementById("login").style.left = "-400px";
    document.getElementById("register").style.left = "50px";
    document.getElementById("btn").style.left = "110px";
}
function login() {
    document.getElementById("login").style.left = "50px";
    document.getElementById("register").style.left = "450px";
    document.getElementById("btn").style.left = "0px";
}
