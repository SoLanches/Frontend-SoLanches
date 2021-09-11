describe("Testa comportamento do componente Button", () => { 
    it("Retorna true se o botão e os seus itens  estão visíveis", () => {
        
        cy.visit('/')
        
        cy.get('.style_container__jFrh2').should('be.visible')

        cy.get('.style_icon__Y4Ny5').should('be.visible')

        cy.get('.style_title__2-L30').should('be.visible')

        cy.get('.style_container__jFrh2').click()

        cy.get('.style_title__2-L30').should('be.visible')

        cy.get('.style_icon__Y4Ny5').should('be.visible')
    })
})
