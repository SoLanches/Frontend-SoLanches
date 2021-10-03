/// <reference types="cypress" />

describe('testa a tela de cadastro de comercio', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.style_buttonContainer__3GPeR').should('be.visible').click();
    })

    it('não permite avançar a tela de cadastro se todos os campos estiverem em branco', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo nome', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('name');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo telefone', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('phone');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo email', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('email');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo cnpj', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('cnpj');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo cidade', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('city');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo rua', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('street');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo numero', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('number');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se estiver faltando campo senha', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm('password');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('@registrationForm').should('be.visible');
    });

    it('não permite avançar a tela de cadastro se as duas senhas não coincidirem', () => {
        cy.get('.styles_inputGroup__1__Ht').as('registrationForm').should('be.visible');
        cy.fillRegistrationForm();
        cy.get('#passwordConfirm')
            .should('be.visible')
            .clear()
            .type('randomPassword');
        cy.contains('Avançar').should('be.visible').click();
        cy.contains('As senhas devem ser iguais.')
        cy.get('@registrationForm').should('be.visible');
    });

    it('avança para a próxima tela se os campos estiverem preenchidos', () => {
        cy.get('.styles_inputGroup__1__Ht').should('be.visible');
        cy.fillRegistrationForm();
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');

    });

    it('não permite avançar a tela de horários se não tiver nenhum preenchido', () => {
        cy.get('.styles_inputGroup__1__Ht').should('be.visible');
        cy.fillRegistrationForm();
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.ant-notification').should('be.visible');
        cy.contains('Erro ao adicionar horário');
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');
    })

    it('não permite adicionar horário se tiver um horário com informação em branco', () => {
        cy.get('.styles_inputGroup__1__Ht').should('be.visible');
        cy.fillRegistrationForm();
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');
        cy.get('#opens').should('be.visible').type('08:00');
        cy.contains('Adicionar horário').should('be.visible').click();
        cy.get('.ant-notification').should('be.visible');
        cy.contains('Erro ao adicionar horário');
    })

    it('permite avançar a tela de horários para de imagem de perfil se tiver horário preenchido', () => {
        cy.intercept('POST', '**/comercio', { statusCode: 201, fixture: 'registeredCommerce' });
        cy.get('.styles_inputGroup__1__Ht').should('be.visible');
        cy.fillRegistrationForm();
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');
        cy.get('#opens').should('be.visible').type('08:00');
        cy.get('#closes').should('be.visible').type('12:00');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('not.exist');
        cy.get('.styles_upload__34Ww6').should('be.visible');

    })

    it('não permite avançar para criação de comérico se não tiver selecionado categoria', () => {
        cy.get('.styles_inputGroup__1__Ht').should('be.visible');
        cy.fillRegistrationForm();
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');
        cy.get('#opens').should('be.visible').type('08:00');
        cy.get('#closes').should('be.visible').type('12:00');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('not.exist');

        const imagePath = 'images/lanche.jpg'
        cy.get('.fileInput')
            .attachFile(imagePath);

        cy.contains('Avançar').should('be.visible').click();
        cy.contains('Cadastrar').should('be.visible').click();
        cy.contains('Erro ao cadastrar comércio');
    })

    it('permite criacao de comercio', () => {
        cy.intercept('POST', '**/comercio', { statusCode: 201, fixture: 'registeredCommerce' });
        cy.get('.styles_inputGroup__1__Ht').should('be.visible');
        cy.fillRegistrationForm();
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('be.visible');
        cy.get('#opens').should('be.visible').type('08:00');
        cy.get('#closes').should('be.visible').type('12:00');
        cy.contains('Avançar').should('be.visible').click();
        cy.get('.styles_scheduleList__Ad1Zv').should('not.exist');

        const imagePath = 'images/lanche.jpg'
        cy.get('.fileInput')
            .attachFile(imagePath);

        cy.contains('Avançar').should('be.visible').click();
        cy.contains('Hambúrguer').should('be.visible').click();
        cy.contains('Cadastrar').should('be.visible').click();
        cy.contains('Cadastro realizado com sucesso!');
    })

})
