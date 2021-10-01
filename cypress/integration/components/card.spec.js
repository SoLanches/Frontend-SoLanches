/// <reference types="cypress" />


describe('ok' , () => {


    it('ok2', () => {
        cy.visit('/');

        const categories = ['Todas', 'Pizza', 'Hamburguer', 'Sorvete', 'Lanches']
        let index = 0;
        cy.get('.style_categoryCard__2FPBJ').each(category => {
            expect(category.children()[1].innerText).to.be.equal(categories[index++]);
        })
    })


})