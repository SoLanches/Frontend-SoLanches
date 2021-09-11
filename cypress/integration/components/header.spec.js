describe("Testa comportamento do componente Header", () => {
    it("Testa se os itens do componente estão visíveis", () => {

        cy.visit('/')

        // Checa se o container do componente está visível
        cy.get('.style_container__3bycN').should('be.visible')
        cy.get('.style_container__3bycN a').should('be.visible')
        cy.get('.style_container__3bycN svg').should('be.visible')
    })

    it("Testa se os itens do componente possuem href", () => {
        // Verifica se o atributo href existe na tag 'a' e verifica se as funções após o click estão
        // corretas
        cy.get('.style_container__3bycN a').should('have.prop', 'href')
        cy.get('a').wait(500).click({multiple : true})
        cy.get('svg').wait(500).click()
        cy.get('.style_container__3bycN').should('be.visible')
        cy.get('.style_container__3bycN a').should('be.visible')
        cy.get('.style_container__3bycN svg').should('be.visible')
    })
})