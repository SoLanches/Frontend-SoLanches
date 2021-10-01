describe("Testa comportamento da página inicial", () => {
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

    describe("Testa comportamento do botão de cadastro", () => {
        it("Retorna true se ao clicar no botão a aplicação é redirecionada para a página de registro", () => {

            cy.visit('/')

            cy.get('.style_buttonContainer__3GPeR').click()
            cy.url().should('include', '/registrar')
            cy.url().should('eq', 'http://localhost:3000/registrar')
        })

    })

    describe("Testa comportamento do click na logo SoLanches", () => {
        it("Retorna true se ao clicar na logo a aplicação é redirecionada para a página inicial", () => {

            cy.visit('/')

            cy.get('.style_logo__35L7a').click()
            cy.url().should('include', '/inicio')
            cy.url().should('eq', 'http://localhost:3000/inicio')
        })

    })

    describe("Testa comportamento dos links contidos no Header", () => {
        it("Retorna true se ao clicar no botão a aplicação é redirecionada para as rotas corretas", () => {

            cy.get('.style_container__3bycN .style_paginas__12h2h').find('a').each((elemento, index, list) => {

                const lista = ['/inicio', '/categorias', '/categorias']

                cy.get(elemento).click().then(() => {
                    cy.url().should('include', `${lista[index]}`)
                }).wait(4000)

            })

            cy.get('.style_container__3bycN').find('.style_paginas__12h2h').as("items");
            expect("@items").to.have.length(6)
        })

    })

})
