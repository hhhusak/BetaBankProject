'use strict';

const account1 = {
    login: "victor",
    password: '1111',
    transfers: [5000, -100, 350, -200],
}

const account2 = {
    login: "anhelina",
    password: '2222',
    transfers: [3000, -2000, 1500, -500],
}

const account3 = {
    login: "pavlo",
    password: '2222',
    transfers: [2500, -1000, 300, 500],
}

const accounts = [account1, account2, account3];

const containerTransfers = document.querySelector('.transfers');
const inputRecipient = document.querySelector('#recipient');
const btnSend = document.querySelector('#btnsend');
const balanceLabel = document.querySelector('.balanceWrapper');
const inputAmount = document.querySelector('#amount');

const displayTransfers = function (transfers) {
    containerTransfers.innerHTML = '';

    transfers.forEach(function (tran, i) {
        const type = tran > 0 ? 'deposit' : 'withdraw';
        const html = `
        <div class="transfers__row">
            <div class="transfers__name">${type}</div>
            <div class="transfers__date">${i + 1}</div>
            <div class="transfers__value transfers__type--${type}">${tran}</div>
        </div>
        `;
        containerTransfers.insertAdjacentHTML('afterbegin', html);
    });
}

const updateUI = function (acc) {
    displayTransfers(acc.transfers);

    displayBalance(acc);
}

const displayBalance = function (acc) {
    const balance = acc.transfers.reduce((acc, tran) => acc + tran, 0);
    acc.balance = balance;
    balanceLabel.innerHTML = `<a href="transfersli.html" class="balance">${balance}₴</a>`;
}

btnSend.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputAmount.value);
    const recipientAcc = accounts.find(
        acc => acc.login === inputRecipient.value
    );

    if (amount > 0 &&
        recipientAcc &&
        account1.balance >= amount &&
        recipientAcc !== account1) {
        recipientAcc.transfers.push(amount);
        account1.transfers.push(-amount);

        inputAmount.value = inputRecipient.value = '';

        updateUI(account1);
    }
})

updateUI(account1);