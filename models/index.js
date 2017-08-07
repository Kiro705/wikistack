var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});

let Page = db.define('page', {
    title: {
        type: Sequelize.STRING
    },
    urlTitle: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

let User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
});

console.log('hello');
module.exports = {
    db: db,
    Page: Page, 
    User: User,
}
