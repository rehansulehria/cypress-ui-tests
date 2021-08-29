import { userData } from '../common/test-data'

class Login {
  constructor () {
    this.selector = {
      login: 'a[href="/login"]',
      email: '#email',
      password: '#password',
      submit: 'span.button__label'

    }
  }

  get loginWithCreatedUser () {
    cy.get(this.selector.login).click()
    cy.get(this.selector.email).type(userData.userEmail)
    cy.get(this.selector.password).type(userData.userPassword)
    cy.get(this.selector.submit).click()
  }
}

export default Login
