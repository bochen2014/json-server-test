const faker = require('faker');
const _ = require('lodash');


// localhost:3000/people
// localhost:3000/people?id=3
const generator = () => ({
    people: _.times(100, n => ({
        id: n,
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
    }))
});


// SyntaxError: Unexpected token 'export'
// es6 not recognized yet;
module.exports = generator 