/// <reference types="cypress" />



describe("Testa comportamento do componente ProductCard", () => {
    it("Retorna true se o componente está visível", () => {
        cy.intercept('GET', "**/cardapio").as('getCardapio');
        cy.visit('/categorias')

        cy.get('.style_title__1zb6s').first().click()


        cy.wait("@getCardapio").then(({ response }) => {
            const responseLength = response.body.destaques.length;

            if (responseLength === 0) {

                cy.get('.styles_noItens__k7KG9').should("have.text", "Não há itens em destaque!")
            }
            else {
                cy.get(".styles_products__nqs1O")
                    .find(".style_container__1SUz-")
                    .should("have.length", responseLength);
            }


        });

    })

    it("coloco depois a descrição", () => {


        cy.visit('/categorias')

        cy.get('.style_card__3up6Y a').first().then(url => {
            cy.intercept('GET', `**/comercio/${url.attr('href')}`).as('getCardapio');
        })
        cy.get('.style_title__1zb6s').first().click()

        cy.wait("@getCardapio").then(({ response }) => {
            const horarios = response.body.attributes.horarios
            
            let index = 1;
            let finalIndex = horarios.length;
            cy.get('.style_opens__2UkAm').then(liArray => {
                for (index; index <= finalIndex; index++) {
                    console.log(liArray[0]);
                    
                    expect(liArray[index]).to.have.text(horarios[index - 1].opens);

                }
            })
        })

    })

})
