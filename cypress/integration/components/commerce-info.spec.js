describe("Testa comportamento do componente ProductCard", () => {
    it("Retorna true se o componente está visível", () => {

        cy.visit('/')

        // Checa se o container do componente está visível
        cy.get('.styles_container__6trCd').should('be.visible')

        // Checa se o container da imagem está visível
        cy.get('.styles_commerce_image__3bbwV').should('be.visible')

        // Checa se o container da div de ícones de redes sociais está visível
        cy.get('.styles_social_medias__U_Jbp').should('be.visible')

        // Checa se o container do endereço está visível
        cy.get('.styles_address__384Kd').should('be.visible')

        // Checa se o container dos botões está visível
        cy.get('.styles_buttons__2eZIf').should('be.visible')

        // Clica no botão de horários, abre o modal e depois fecha
        cy.get('.style_container__jFrh2:last').click()
        cy.get('.style_outContainer__2GlHv').should('be.visible')
        cy.get('.style_close__2Czx5').click()
        cy.get('.style_outContainer__2GlHv').should('not.be.visible')

        // Verifica se o atributo href existe na tag a
        cy.get('.styles_buttons__2eZIf a').should('have.prop', 'href')
    })
})
