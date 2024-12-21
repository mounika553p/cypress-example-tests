/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
//@ts-check

describe('Register to demo form', () => {


    beforeEach('load data', function () {
        cy.fixture('user').then((user) => {
            this.user = user;
        })
    })


    it('Register with valid details', function () {

        cy.visit(Cypress.config().baseUrl)
        cy.get('#first-name').should('be.visible').type(this.user.firstname)
        cy.get('#last-name').should('be.visible', true).type(this.user.lastname)
        cy.get('#job-title').type('Engineer')
        cy.get('#radio-button-2').click()
        cy.get('#checkbox-2').click()
        cy.get('#select-menu').select('0-1')
        cy.get('#datepicker').type('07/03/1990')
        cy.get('.btn').click()
        cy.contains('The form was successfully submitted').should('be.visible')
    })

    it.only('login with user details', () => {
        // cy.visit(Cypress.env('staging_loginurl'))
        // cy.xpath("//*[@name='username']").type(Cypress.env('username'))
        // cy.xpath("//*[@name='password']").click().clear().type(Cypress.env('password'))
        cy.login()
        cy.xpath("//*[@type='submit']").click()
        cy.get('.oxd-userdropdown-tab').should('be.visible')
    })
})