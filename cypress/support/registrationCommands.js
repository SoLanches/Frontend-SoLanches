/// <reference types="cypress" />

Cypress.Commands.add("fillRegistrationForm", (excludingField) => {
    cy.fixture("commerce").then((commerceJson) => {
        cy.get('input').then(inputFields => {
            [...inputFields].forEach(el => {
                const elementId = el.getAttribute('id');
                if(elementId !== 'instagram' && elementId !== 'facebook' && elementId !== excludingField)
                    cy.wrap(el).type(commerceJson[elementId]);
            })
        })
    })

})