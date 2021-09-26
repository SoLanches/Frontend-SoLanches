describe("Testa comportamento do componente ProductCard", () => { 
    it("Retorna true se o componente está visível", () => {
        
        cy.visit('/')
        
        cy.get('.style_container__1SUz-').should('be.visible')
        
        cy.get('.style_image__yBTzQ').should('be.visible')
        cy.get('.style_title__8C9Ec').should('be.visible')
        cy.get('.style_description__10VE8').should('be.visible')
        cy.get('.style_price__1Atyp').should('be.visible')
    })
})
