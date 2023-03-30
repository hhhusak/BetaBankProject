'use strict';

const account1 = {
    login: "victor",
    password: '1111',
}

const account2 = {
    login: "anhelina",
    password: '2222',
}

const accounts = [account1, account2];

const loginLabel = document.querySelector("#loginLabel");
const passLabel = document.querySelector("#passLabel");
const btnModalLogIn = document.querySelector('.btn-primary');
const loginLabelText = document.querySelector('.modal-title');

let currentAccount;
btnModalLogIn.addEventListener('click', function(e){
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.login === loginLabel.value);
    loginLabel.value = '';
    if(currentAccount.password === passLabel.value){
        loginLabel.value = passLabel.value = '';
        window.location.replace('mainli.html');
    } else {
        loginLabelText.textContent = 'Password is incorrect';
        loginLabel.value = passLabel.value = '';
    }
})