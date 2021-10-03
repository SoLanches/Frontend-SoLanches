describe("Teste da tela de edição e adição de produtos ao cardápio", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pastelicia/edit')
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
        cy.get(".style_categoryAddContainer__3xBB_ input").type("Café")
        cy.get(".style_categoryAddContainer__3xBB_ input").should("have.value", "Café")
        cy.get(".style_categoryAddContainer__3xBB_ .style_container__jFrh2").click().wait(4000)
        
        // cy.get(".style_categoryDeleteContainer__1h7ga select").select("Café").then(() => {
        //     cy.get(".style_categoryDeleteContainer__1h7ga .style_container__jFrh2").click()
        // })
    })
})