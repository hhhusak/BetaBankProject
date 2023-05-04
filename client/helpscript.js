'use strict';

const amountInput = document.querySelector("#amount");
const nameInput = document.querySelector("#nameLabel");
const btnCreate = document.querySelector("#createButton");
const collectionsContainer = document.querySelector(".collections");

class Collection {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


let collections = [];

const displayCollections = function (collect) {
    collectionsContainer.innerHTML = '';

    collect.forEach(function (col) {
        const html = `
        <div class="collections__row">
            <div class="collections__name">${col.name}</div>
            <div class="collections__value">${col.amount}</div>
        </div>
        `;
        collectionsContainer.insertAdjacentHTML('afterbegin', html);
    });
    amountInput.value = nameInput.value = '';
}

btnCreate.addEventListener('click', function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const amount = Number(amountInput.value);

    const coll = new Collection(name, amount);
    collections.push(coll);
    displayCollections(collections);
    console.log(collections);
})
displayCollections(collections);