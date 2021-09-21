describe("Testa comportamento do componente CardCommerce", () => { 
    it("Retorna true se o componente e seus elementos estão visíveis", () => {
        
        cy.visit('/')
        
        cy.get('.style_container__dCAhr').should('be.visible')
    
        cy.get('.style_title__1zb6s').should('be.visible')
        cy.get('.style_icon__2_6V2').should('be.visible')
        
        cy.get('.style_line__38DG5').should('be.visible')
        cy.get('svg').should('be.visible')
        
        cy.get('.style_adress__kS-nl').should('be.visible')
        cy.get('.style_containerInfos__2y533').should('be.visible')
        cy.get('.style_times__yY4i5').should('be.visible')

    })

    it("Retorna true se o componente e seus elementos estão visíveis após ser clicado", () => {
        
        cy.visit('/')
        
        cy.get('.style_container__dCAhr').click({multiple : true})
        cy.get('.style_container__dCAhr').should('be.visible')
        cy.get('.style_title__1zb6s').should('be.visible')
        cy.get('.style_icon__2_6V2').should('be.visible')
        
        cy.get('.style_line__38DG5').should('be.visible')
        cy.get('svg').should('be.visible')
        
        cy.get('.style_adress__kS-nl').should('be.visible')
        cy.get('.style_containerInfos__2y533').should('be.visible')
        cy.get('.style_times__yY4i5').should('be.visible')

    })
})
