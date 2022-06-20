var customerName = 'bob';

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();

}

function setBestCustomer(){
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'someValue';

function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = 'notSomeValue';
}