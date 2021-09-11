describe("Testa comportamento do componente CategoryTags", () => { 
    it("Retorna true se o componente está visível antes e após o click", () => {
        
        cy.visit('/')
        
        cy.get('.style_categoryTag__2vKJM').should('be.visible')
        cy.get('.style_title__38jew').should('be.visible')
        cy.get('.style_categoryTag__2vKJM').click()
        cy.get('.style_active__lGnSi.style_categoryTag__2vKJM').should('be.visible')
        cy.get('.style_title__38jew').should('be.visible')
        
    })
})
