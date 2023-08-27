const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function register(){
    var name = document.getElementById("reg-name").value;
    var password = document.getElementById("reg-password").value;
    var email = document.getElementById("reg-email").value;
    
    // lấy danh sách tài khoản từ localstorage
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // kiểm tra tài khoản đã tồn tại hay chưa
    var existingAccount = accounts.find(account => account.username === username);
    // var checkPassword = password === repasswrod ? true : false;
    if(existingAccount){
        alert("Tài khoản đã tồn tại");
    }
    else {
        var account = {
            name: name,
            password: password,
            email: email,
        }

        // thêm tài khoản mới vào danh sách và lưu vào localstorage
        accounts.push(account);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        alert("đăng ký thành công")
    }
 }

function login(){
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // lấy danh sách tài khoản từ localstorage
    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // kiểm tra đăng nhập
    var account = accounts.find(account => account.email === email && account.password === password);

    if (account) {
        alert("Đăng nhập thành công");
    }
    else{
        alert("Sai tên tài khoản hoặc mật khẩu");
    }
}