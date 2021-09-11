
describe("Testa comportamento do componente CardLogin", () => {
    it("Retorna true se o botão que dispara o componente está visível e clica no botão", () => {

        cy.visit('/')

        cy.get('.style_container__jFrh2').should('be.visible')
        cy.get('.style_container__jFrh2').click({ multiple: true }).wait(500)
    })

    it("Retorna true se os elementos que compõem o componente estão visíveis", () => {
        cy.get('.styles_itemHeader__35hL3').should('be.visible')
        cy.get('#loginEmail').should('be.visible')
        cy.get('#loginPassword').should('be.visible')
        cy.get('.styles_registerNow__692gj span').should('be.visible')
        cy.get('.styles_registerNow__692gj a').should('be.visible')
        cy.get('.styles_registerNow__692gj a').should('have.prop', 'href')

    })


    it("Teste de inputs. Recebimento de texto do email e de senha bem como deleta os textos", () => {
        cy.get('#loginEmail').type('solanches@gmail.com').wait(1000)
        cy.get('#loginEmail').clear()

        cy.get('#loginPassword').type('#soLanches').wait(800)
        cy.get('#loginPassword').clear()
        cy.get('.styles_container__116nP button').click({ multiple: true })
    })


    it("Retorna true se os itens do componente não estão visíveis após o componente ser fechado", () => {
        cy.get('.styles_close__yke_z').wait(1000).click({ multiple: true })
        cy.get('.styles_itemHeader__35hL3').should('not.be.visible')
        cy.get('.styles_itemHeader__35hL3').should('not.be.visible')
        cy.get('#loginEmail').should('not.be.visible')
        cy.get('#loginEmail').should('not.be.visible')
        cy.get('.styles_registerNow__692gj span').should('not.be.visible')
        cy.get('.styles_registerNow__692gj a').should('not.be.visible')

    })
})
