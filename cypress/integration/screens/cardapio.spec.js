/// <reference types="cypress" />

describe("Testa comportamento do componente ProductCard", () => {

    it("Retorna true se imagem de perfil está visível", () => {

        cy.visit('/categorias')

        cy.get('.style_title__1zb6s').first().click()

        cy.get('.styles_commerce_image__3bbwV').should('be.visible')

    })

    it("Retorna true se nome de perfil está visível ", () => {

        cy.intercept('GET', "**/cardapio").as('getCardapio');
        cy.visit('/categorias')

        cy.get('.style_title__1zb6s').first().click()


        cy.wait("@getCardapio").then(({ response }) => {
            const name = response.body.nome;
            cy.get(".styles_container__6trCd")
                .find(".styles_container__6trCd h1")
                .should("to.have", name);
        })

    })

    it("Retorna true se endereço está visível ", () => {

        cy.intercept('GET', "**/cardapio").as('getCardapio');
        cy.visit('/categorias')

        cy.get('.style_title__1zb6s').first().click()


        cy.wait("@getCardapio").then(({ response }) => {
            const adress = response.body.endereco

            console.log(adress);
            cy.get(".styles_container__6trCd")
                .find(".styles_address__384Kd")
                .should("to.have", adress);
        })

    })

    it("Retorna true se os botões de contato e horários estão visíveis ", () => {

        cy.visit('/categorias')

        cy.get('.style_title__1zb6s').first().click()

        cy.get(".style_container__jFrh2").should("be.visible")

    })

    it("Retorna true se os títulos das seções da página estão visíveis ", () => {

        cy.visit('/categorias')

        cy.get('.style_title__1zb6s').first().click()

        cy.get(".style_container__3bycN").should("be.visible")
        cy.get(".anticon").should("be.visible")

        cy.get(".styles_sectionTitle__Z6hZ3").should("to.have", "Cardápio")

        cy.get(".style_sectionTitle__aS4zo").should("be.visible")


    })

    it("Retorna true se estiver produto no destaque e está visível e se não tiver destaque deve retornar true se tiver uma mensagem", () => {
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

        it("Retorna true se os horários cadastrados estão sendo renderizados corretamente", () => {


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

            cy.visit('/categorias')

            cy.get('.style_card__3up6Y a').first().then(url => {
                cy.intercept('GET', `**/comercio/${url.attr('href')}`).as('getCardapio');
            })
            cy.get('.style_title__1zb6s').first().click()

            cy.wait("@getCardapio").then(({ response }) => {
                const horarios = response.body.attributes.horarios

                let index = 1;
                let finalIndex = horarios.length;
                cy.get('.style_closes__2ryWy').then(liArray => {
                    for (index; index <= finalIndex; index++) {
                        console.log(liArray[0]);

                        expect(liArray[index]).to.have.text(horarios[index - 1].closes);

                    }
                })
            })

        })

    })

})
