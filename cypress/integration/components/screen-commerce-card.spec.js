describe("Testa a visualização dos cards de categoria", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/categorias");
  });

  it("Checa se o container dos cards de categorias estão visíveis", () => {
    cy.get(".style_container__1AC3T").as("container-cards");

    cy.get("@container-cards").find(".style_categoryCard__2FPBJ").as("cards");
    expect("@cards").to.have.length(6);

    const categories = ["Todas", "Pizza", "Hamburguer", "Sorvete", "Lanches"];
    let index = 0;
    cy.get("@cards").each((category) => {
      // Índice 0 é o container da imagem
      expect(category.children()[0].hidden).to.be.false;

      // Índice 1 é o título
      const currentCategory = category.children()[1].innerText;
      expect(currentCategory).to.be.equal(categories[index++]);

      // Índice 2 é o ícone de dropdown
      expect(category.children()[2].hidden).to.be.false;
    });
  });

  it("Verifica se os dados recuperados do banco são os mesmos que são exibidos na tela", () => {
    cy.request("solanches.herokuapp.com/comercios").should((response) => {
      const responseLength = response.body.length;
      cy.get(".style_card__3up6Y")
        .find(".style_container__dCAhr")
        .should("have.length", responseLength);
    });
  });

  it("Checa o comportamento dos cards ao serem selecionados é adequado", () => {
    cy.request("solanches.herokuapp.com/comercios").then((response) => {
      cy.get(".style_container__1AC3T")
        .find(".style_categoryCard__2FPBJ")
        .each((card) => {
          let categoryName = card.children()[1].innerText;
          cy.get(".style_container__1AC3T .style_categoryCard__2FPBJ")
            .contains(categoryName)
            .click()
            .then(() => {
              let filtered = response.body.filter((item) => {
                if (categoryName !== "Todas") {
                  return item.attributes.categoria.includes(categoryName);
                } else {
                  return item;
                }
              });
              cy.get(".style_card__3up6Y")
                .find(".style_container__dCAhr")
                .should("have.length", filtered.length);
            })
            .wait(4000);

          // Checa se, após clicado, a classe 'active' é adicionada a classList
          expect(card[0].classList.length > 0).to.be.true;

          // Verifica se o nome da categoria selecionada aparece no título da sessão de listagem
          cy.get(".style_title__9URXY")
            .eq(1)
            .then((element) => {
              const text = element.text();
              expect(categoryName).to.be.equal(text);
            });
        });
    });
  });

  it("Checa se o componente de card de comércio está com todas suas informações visíveis", () => {
    cy.get(".style_title__1zb6s").should("be.visible");
    cy.get(".style_icon__2_6V2").should("be.visible");

    cy.get(".style_line__38DG5").should("be.visible");
    cy.get("svg").should("be.visible");

    cy.get(".style_adress__kS-nl").should("be.visible");
    cy.get(".style_containerInfos__2y533").should("be.visible");
    cy.get(".style_times__yY4i5").should("be.visible");
  });
});
