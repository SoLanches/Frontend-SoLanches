describe("Teste da tela de edição e adição de produtos ao cardápio", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/inicio')
        cy.get(".style_container__jFrh2").contains("Entrar").click()
        cy.get("#loginUser").type("mega burguer")
        cy.get("#loginPassword").type("megaburguer")
        cy.get(".styles_container__116nP .style_container__jFrh2").contains("Entrar").click().wait(4000)
        cy.get(".style_sectionMenu__4R-h1 .style_container__jFrh2").contains("editar cardápio").click().wait(4000)
    })

    it("Testa se todos os elementos estão visíveis na tela", () => {
        cy.get(".style_wrapper__1tPlI").should("be.visible")
        cy.get(".style_titleContainer___RE_b").contains("Editando o seu cardápio").should("be.visible")
        cy.get(".style_titleContainer___RE_b").contains("Olá! Aqui você pode fazer a edição do seu cardápio, fazendo operações diversas sobre as categorias e products do cardápio.").should("be.visible")
        cy.get(".style_sectionTitle__3ZZpK").contains("Categorias").should("be.visible")
        cy.get(".style_sectionBody__PyaHQ h3").contains("Categorias ativas").should("be.visible")
        cy.get(".style_sectionBody__PyaHQ h3").contains("Adicionar categoria").should("be.visible")
        cy.get(".style_sectionBody__PyaHQ h3").contains("Deletar categoria").should("be.visible")
        cy.get(".style_categoryAddContainer__3xBB_").should("be.visible")
        cy.get(".style_categoryDeleteContainer__1h7ga").should("be.visible")
        cy.get(".style_sectionTitle__3ZZpK").contains("produtos").should("be.visible")
        cy.get(".style_sectionBody__PyaHQ h3").contains("Categoria").should("be.visible")
        cy.get(".style_productController__1droo").should("be.visible")
    })

    it("Testa se os inputs/selects têm comportamento adequado", () => {
        cy.get(".style_categoryAddContainer__3xBB_ input").type("Salgados")
        cy.get(".style_categoryAddContainer__3xBB_ input").should("have.value", "Salgados")
        cy.get(".style_categoryAddContainer__3xBB_ .style_container__jFrh2").click().wait(4000)
        cy.get(".style_categoryTag__2vKJM").contains("Salgados").should("be.visible")
    })

    it("Testa se adicionar produto tem comportamento adequado", () => {
        cy.get(".style_sectionBody__PyaHQ .style_container__jFrh2").contains("Adicionar produto").click()
        cy.get(".styles_container__2A0ja").should("be.visible")
        cy.get(".styles_container__2A0ja #edit-name").type("Torta de Frango mista")
        cy.get(".styles_container__2A0ja #edit-price").type("8.0")
        cy.get(".styles_container__2A0ja select").select("Salgados")
        cy.get(".styles_container__2A0ja #edit-description").type("Deliciosa torta de frango com recheio de frango com catupiry, presunto e queijo")
        cy.get(".style_container__jFrh2").contains("Salvar alterações").click().wait(4000)
    })

    it("Testa botões de interação do componente card de produto", () => {
        cy.get(".style_container__1SUz-").contains("Torta de Frango mista").should("be.visible").then(() => {
            cy.get(".style_containerFooter__2l9Or").find("span").eq(0).click().then(() =>{ 
                cy.get(".ant-notification-notice").should("be.visible")
            });
            cy.get(".style_containerFooter__2l9Or").find("span").eq(2).click().then(() => {
                cy.get(".ant-notification-notice").should("be.visible")
            })
        })

        cy.get(".style_categoryDeleteContainer__1h7ga select").select("Salgados").then(() => {
            cy.get(".style_categoryDeleteContainer__1h7ga .style_container__jFrh2").click()
        })
    })
})
