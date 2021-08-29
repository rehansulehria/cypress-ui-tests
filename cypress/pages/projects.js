const faker = require('faker')

const project = faker.lorem.word()
export const projectName = `Test Project ${project}`

class Projects {
    constructor() {
        this.selector = {
            project: 'div.side-nav__main__item__icon',
            newProject: 'button.button-icon',
            projectName: '#input-field-name',
            projectDesc: '#textarea-field-nameTextArea',
            addButton: '.button--accent',
            createdProject: 'div.saved-project',
            newSimulation: '.saved-project__button--new-simulation span',
            descriptionSimulation: '#textarea-field-description',
            submitButton: 'button.settings-form__submit',
            projectHeader: 'span.saved-project__headline__name__text'
        }

        exports.createNewProject = () => {
            cy.get(this.selector.project)
                .eq(1)
                .click()
            cy.get(this.selector.newProject)
                .click()
            cy.get(this.selector.projectName)
                .type(projectName)
            cy.get(this.selector.projectDesc)
                .type('Test Desc')
            cy.get(this.selector.addButton)
                .find('span')
                .filter(':contains("Add")')
                .should('be.visible')
                .click()
        }

        exports.verifyProjectCreation = () => {
            cy.wait(1000).get(this.selector.createdProject)
                .within(() => {
                    cy.contains(projectName)
                        .should('be.visible')
                })

            exports.createNewSimulation = () => {
                cy.get(this.selector.projectHeader)
                    .filter(`:contains(${projectName})`)
                    .click()
                    .get(this.selector.newSimulation)
                    .click()
                    .get(this.selector.descriptionSimulation)
                    .type('Test Simulation Desc')
                    .get(this.selector.submitButton)
                    .click()
            }
            exports.verifySimulation = () => {
                cy.visit('https://www.d3a.io/projects')
                cy.get(this.selector.projectHeader)
                    .filter(`:contains(${projectName})`)
                    .click()
                cy.contains('default simulation')
                    .should('be.visible')
            }
        }
    }
}

export default Projects
