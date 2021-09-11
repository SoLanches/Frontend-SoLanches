describe("Testa comportamento do componente ModalTimeListing", () => { 
    it("Retorna true se o botão que dispara o componente está visível", () => {
        
        cy.visit('/')
        
        cy.get('.style_container__jFrh2').should('be.visible')
        cy.get('.style_container__jFrh2').click().wait(3000)
    })

    it("Retorna true se o componente está visível", () => {
        cy.get('.style_container__33xI7').should('be.visible')
        cy.get('.style_title__3ge6C').should('be.visible')
        cy.get('.style_table__2MgqA').should('be.visible')
        cy.get('.style_close__2Czx5').should('be.visible').wait(3000)
    })
    
    it("Retorna true se o componente não está visível, após o item que o fecha ser clicado", () => {
        cy.get('.style_close__2Czx5').click().wait(1000)
        cy.get('.style_container__33xI7').should('not.be.visible')
        cy.get('.style_title__3ge6C').should('not.be.visible')
        cy.get('.style_table__2MgqA').should('not.be.visible')
        cy.get('.style_close__2Czx5').should('not.be.visible').wait(2000)
        
    })
})
