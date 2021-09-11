describe('Teste de comportamento do componente categoryCard', () => {
    it('True será retornado se o componente está visível antes de ser clicado ', () => {
        cy.visit('/')
        cy.get('.style_categoryCard__2FPBJ').should('be.visible')
        cy.get('.style_container__3S9Rh').should('be.visible')
        cy.get('.style_rotate__1hH3A').should('be.visible')
        cy.get('.style_icon__2eIcD').should('be.visible')
        cy.get('.style_title__ZDkRo').should('be.visible')

    })

    it('True será retornado se o componente está visível após ser clicado', () => {
        cy.get('.style_categoryCard__2FPBJ').click()
        cy.get('.style_active__1fxgg.style_categoryCard__2FPBJ').should('be.visible')
        cy.get('.style_container__3S9Rh').should('be.visible')
        cy.get('.style_rotate__1hH3A').should('be.visible')
        cy.get('.style_icon__2eIcD').should('be.visible')
        cy.get('.style_title__ZDkRo').should('be.visible')
        
    })
})
