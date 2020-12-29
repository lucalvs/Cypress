// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0jVyGKz%2B51%2FcroWpoqqfZK6ycy%2F097FCDBSpFEbh1xXunjqSnYb3WjJlshcGwAc7qpZ86VyMJI9wm0clg71CYPTilqeqdiNBlFN9xkuPSt3nePUJ%2B8w3TZNBd6dghKnpORZRG7ki9nsE%2FAMr%2FaFJC7%2FTO7QSgOhOD85n3RVqgIhcDon8An9fyeNhcBeE9u6A%2B1PldhRTDNNOvP4aXWY1vv9rI8STO77OCWRBrBovHhhiNRWHI36%2F3SSwd5v%2Bsna3hDe9ZWiZ03F4Ve7YEeEq2Gt0wkEtFzZa%2FBW4YPqP5%2BUYtGnqOlRaazBVAD0aBeyHgi5zURPN39sNVp4YlJ1hGBNo9TZUIQjTmmt9gs79dhdYsV64HiBfEY3XGXKrm%2B3QceRpAO9ds9RgM%2BW20qQ3vEk%3D000306'
    )
})