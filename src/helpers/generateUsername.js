const mongoose = require('mongoose');

async function generateUniqueUsername(firstName, lastName, companyName, dateOfBirth) {
    const baseUsername = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${companyName.toLowerCase()}_${dateOfBirth.toISOString().split('T')[0]}`;
    
    let username = baseUsername;
    let count = 0;

    while (await mongoose.model('employee').exists({ username })) {
        count++;
        username = `${baseUsername}${count}`;
    }

    return username;
}

module.exports = {
    generateUniqueUsername
};