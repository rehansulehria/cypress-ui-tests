
import Login from '../pages/login';
import CreateUser from '../pages/create-user';
import Projects, {createNewProject, verifyProjectCreation} from '../pages/projects';


describe('User can create New Project', () => {
  const login = new Login()
  const user = new CreateUser()
  const project = new Projects()

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    user.createNewUser
    login.loginWithCreatedUser
  })

  it('User Can Create a New Project', () => {
    createNewProject()
    verifyProjectCreation()
  })
})
