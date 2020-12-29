/**
* Crie um arquivo index.d.ts na pasta support.
* Copie o conteúdo abaixo dentro do arquivo index.d.ts criado.
* Importante: esse não substitui o index.js existente. Eles possuem finalidades diferentes.
*/

/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        /**
         * Comando para executar login em backgroun
         * @example
         * cy.backgroundLogin()
         * 
         */
        backgroundLogin(): Chainable<any>
    
    }
}