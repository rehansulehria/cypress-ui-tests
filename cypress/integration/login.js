const Login = require('../pages/login');
const CreateUser = require('../pages/create-user');


describe('Verify Created User Can Login', () => {
  const login = new Login()
  const user = new CreateUser()
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  xit('User Can Login with Created User', () => {
    user.createNewUser
    login.loginWithCreatedUser
  })
})
