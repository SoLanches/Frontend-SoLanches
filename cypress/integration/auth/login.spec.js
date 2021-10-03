/// <reference types="cypress"/>

describe('testes da tela de login', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('mostra erro ao enviar o formulário de login em branco', () => {
        cy.get('.style_container__jFrh2')
            .should('be.visible')
            .first()
            .click();

        cy.get('#loginUser').should('be.visible');
        cy.get('#loginPassword').should('be.visible');
        cy.get('.style_title__2-L30')
            .should('be.visible')
            .last()
            .click();

        cy.contains('Ocorreu um problema ao fazer o login do comércio com o usuário');
    })


    it('mostra erro ao enviar o formulário de login com usuário inválido', () => {
        cy.get('.style_container__jFrh2')
            .should('be.visible')
            .first()
            .click();

        cy.get('#loginUser').should('be.visible').type('pastelaria inválida');
        cy.get('#loginPassword').should('be.visible');
        cy.get('.style_title__2-L30')
            .should('be.visible')
            .last()
            .click();

        cy.contains('Ocorreu um problema ao fazer o login do comércio com o usuário pastelaria_invalida');
    })

    it('mostra erro ao enviar o formulário de login com senha inválida', () => {
        cy.get('.style_container__jFrh2')
            .should('be.visible')
            .first()
            .click();

        cy.get('#loginUser').should('be.visible').type('pastelicia');
        cy.get('#loginPassword').should('be.visible').type('pastelaria');
        cy.get('.style_title__2-L30')
            .should('be.visible')
            .last()
            .click();

        cy.contains('Ocorreu um problema ao fazer o login do comércio com o usuário pastelicia');
    })

    it('permite o login ao preencher o formulário com informações verdadeiras', () => {
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
          .and('have.text', 'Sair');

    })
})