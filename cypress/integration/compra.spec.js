/// <reference types="cypress" />



context('Compra', () => {
    it('Efetuar uma compra de produto', () => {
        cy.backgroundLogin()


        // http://automationpractice.com/index.php
        cy.visit('/');

        
        let nomeProduto = 'Faded Short Sleeve T-shirts';

        cy.contains(nomeProduto).trigger('mouseover')

        cy.contains(nomeProduto)
            .parent() //Elemento pai h5
            .siblings('div.button-container') //irmão do elemento h5
            .children('a') //filhos do elemento container
            .first() //opção dentre o elemento 'add to cart' ou 'more'
            .click() //clicar com o botão do mouse;

            // Validando se o produto foi adicionado ao carrinho com sucesso
            cy.get('.icon-ok')
                .parent()//h2
                .should('contain.text', 'Product successfully added to your shopping cart')

            cy.get('span#layer_cart_product_title').should('contain.text', nomeProduto)

            //cy.pause() //Pausa o projeto até o momento das atuais asserções


        cy.get('.button-container a[href$="controller=order"]').click()
        cy.get('.cart_navigation a[href$="order&step=1"]').click()
        
        /* Loga dentro do código
         
        cy.get('#email').type('testes@testes.com')
        cy.get('#passwd').type('testes123')  
        cy.get('button#SubmitLogin').click()  */  

        // Validando se o endereço de entrega é igual o de cobrança
        // [type=checkbox]#adressesAreEquals
        // Teremos 3 parâmetros: tipo asserção | Atributo | valor

        cy.get('[type=checkbox]#addressesAreEquals').should('have.attr', 'checked', 'checked')

        //cy.pause()
        
        cy.get('button[name=processAddress]').click()
        cy.get('[type=checkbox]#cgv').check()
        cy.get('button[name=processCarrier]').click()

        cy.get('.bankwire').click()
        cy.get('.cart_navigation button[type=submit]')
            .find('span')
            .contains('I confirm my order')
            .click()

        cy.get('div p.cheque-indent strong')
            .should('contain.text', 'Your order on My Store is complete.')

        //expect - Forma de asserção explicita
        //should - Forma de asserção implicita

        // 1. capturando text do box e filtrando dentro do texto
        cy.get('div.box').invoke('text').then((text) => {
            console.log(text)

            //1.1 filtrando o Regex
            console.log(text.match(/[A-Z][A-Z]+/g)[1]) 

            //1.2 Escrevendo arquivo com o Id do pedido encontrado
            //parametro: Caminho do arquivo(sempre a partir do root) | Conteúdo do Arquivo
            cy.writeFile('cypress/fixtures/idCompra.json', { id: `${ text.match(/[A-Z][A-Z]+/g)[1] }` })

            //navega até a tela de orders
            cy.get('.button-exclusive').click() 

            //1.3 Faz leitura de um arquivo e obtém o Id do pedido armazenado
            cy.readFile('cypress/fixtures/idCompra.json').then((idCompra) => {
            cy.get('tr.first_item td.history_link a').should('contain.text', idCompra.id)
        })
       
    })

       
    });
});


