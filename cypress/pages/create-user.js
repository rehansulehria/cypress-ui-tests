import {userData} from '../common/test-data'

class CreateUser {
    constructor() {
        this.selector = {
            email: 'input[name="email"]',
            name: 'input[name="name"]',
            organization: 'input[name="organisation"]',
            password: 'input[name="password"]',
            next: 'button[type="submit"]',
            termsCheckBox: '#checkbox-agree'

        }
    }

    get createNewUser() {
        cy.get(this.selector.email).type(userData.userEmail)
        cy.get(this.selector.name).type(userData.userName)
        cy.get(this.selector.organization).type('Test')
        cy.get(this.selector.password).type(userData.userPassword)
        cy.get(this.selector.termsCheckBox).click()
        cy.get(this.selector.next).click()
    }
}

export default CreateUser
