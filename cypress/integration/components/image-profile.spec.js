describe("Testa comportamento do componente ImageProfile", () => { 
    it("Retorna true se o componente está visível antes e após o click", () => {
        
        cy.visit('/')
        
        cy.get('.style_imageContainer__3bMNP').should('be.visible')
        cy.get('.style_imageContainer__3bMNP').click()
        cy.get('.style_imageContainer__3bMNP').should('be.visible')
        
    })
})
