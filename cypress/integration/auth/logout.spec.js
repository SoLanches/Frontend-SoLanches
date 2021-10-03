/// <reference types="cypress" /> 

describe('teste de logout', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('realiza o logout de um usuário logado', () => {
        cy.intercept('POST', '**/login').as('login');
        cy.get('.style_container__jFrh2')
            .should('be.visible')
            .first()
            .click();

        cy.get('#loginUser').should('be.visible').type('pastelicia');
        cy.get('#loginPassword').should('be.visible').type('pastelicia');
        cy.get('.style_title__2-L30')
            .should('be.visible')
            .last()
            .click();
        cy.wait('@login');
        cy.get('.style_container__jFrh2')
          .should('be.visible')
          .first()
          .and('have.text', 'Sair')
          .click();

        cy.get('.ant-notification-notice-message')
          .should('be.visible')
          .and('have.text', 'Logout feito com sucesso!');
    })
})

