describe("Testa comportamento da página inicial, () => { 
    it("Retorna true se os seus elementos estão visíveis", () => {
        
        cy.visit('/')
        
        cy.get('.style_container__3bycN').should('be.visible')
        cy.get('.style_container__3bycN').contains('Página inicial').should('be.visible')
        cy.get('.style_container__3bycN').contains('Categorias').should('be.visible')
        cy.get('.style_container__3bycN').contains('Meu perfil').should('be.visible')

        cy.get('.style_title__3lsZU').contains('Bateu a fome? Podemos ajudar!').should('be.visible')

        cy.get('.style_text__1c7Fd').contains('Reunimos em um só lugar os mais diversos estabelecimentos alimentícios para você escolher onde e o que deseja.').should('be.visible')

        cy.get('.style_wrapper__3eRbY').contains('Reunimos em um só lugar os mais diversos estabelecimentos alimentícios para você escolher onde e o que deseja.').should('be.visible')



        
    })
})