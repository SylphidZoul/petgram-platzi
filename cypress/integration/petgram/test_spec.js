const { isType } = require('graphql')

/* global describe, it, cy */
describe('Petgram', function () {
  it('para ver si funciona', function () {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/2')
    cy.get('article')
  })

  it('si podemos navegar con la navbar al home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('be', '/')
  })

  it('los usuarios no registrados ven en el formulario de registro e inicio de sesion al ir a favs',
    function () {
      cy.visit('/favs')
      cy.get('form').should('have.length', 2)
    })
})
