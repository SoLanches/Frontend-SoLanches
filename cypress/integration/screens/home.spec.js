describe("Testa comportamento da página inicial", () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it("Retorna true se os seus elementos estão visíveis", () => {

        cy.get('.style_container__3bycN').should('be.visible')
        cy.get('.style_container__3bycN').contains('Página inicial').should('be.visible')
        cy.get('.style_container__3bycN').contains('Categorias').should('be.visible')

        cy.get('.style_title__3lsZU').contains('Bateu a fome? Podemos ajudar!').should('be.visible')

        cy.get('.style_text__1c7Fd').contains('Reunimos em um só lugar os mais diversos estabelecimentos alimentícios para você escolher onde e o que deseja.').should('be.visible')

        cy.get('.style_wrapper__3eRbY').contains('Reunimos em um só lugar os mais diversos estabelecimentos alimentícios para você escolher onde e o que deseja.').should('be.visible')

    })

    it("Retorna true se ao clicar no botão a aplicação é redirecionada para a página de registro", () => {

        cy.get('.style_buttonContainer__3GPeR').click()
        cy.url().should('include', '/registrar')
        cy.url().should('eq', 'http://localhost:3000/registrar')
    })

    it("Retorna true se ao clicar na logo a aplicação é redirecionada para a página inicial", () => {

        cy.get('.style_logo__35L7a').click()
        cy.url().should('include', '/inicio')
        cy.url().should('eq', 'http://localhost:3000/inicio')
    })

    it("Retorna true se ao clicar no botão a aplicação é redirecionada para as rotas corretas", () => {

        cy.get('.style_container__3bycN .style_paginas__12h2h').find('a').each((elemento, index) => {

            const lista = ['/inicio', '/categorias']

            cy.get(elemento).click().then(() => {
                cy.url().should('include', `${lista[index]}`)
            })
        })

        cy.get('.style_container__3bycN').find('.style_paginas__12h2h').as("items");
        expect("@items").to.have.length(6)
    })
})
