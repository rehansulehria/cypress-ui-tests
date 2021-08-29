
import Login from '../pages/login';
import CreateUser from '../pages/create-user';
import Projects, {
    createNewProject,
    createNewSimulation,
    verifyProjectCreation,
    verifySimulation
} from '../pages/projects';


describe('User can create a new Simulation', () => {
    const login = new Login()
    const user = new CreateUser()
    const project = new Projects()

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
        user.createNewUser
        login.loginWithCreatedUser
    })
    it('User Can Create a New Simulation', () => {
        createNewProject()
        verifyProjectCreation()
        createNewSimulation()
        verifySimulation()
    })
})
