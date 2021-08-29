const faker = require('faker')
export const userData = {
  userName: faker.name.findName(),
  userEmail: faker.internet.email(),
  userPassword: faker.internet.password()
}

