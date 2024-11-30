describe('Login Page', () => {
  describe('Error Messages', () => {
    it('email input throws error for meliskabasakal33@', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get('[data-cy="email-input"]').type("meliskabasakal33@")

      //Assert
      cy.get('[data-cy="error-message"]').should('be.visible')
    })
    it('password input throws error for 1234', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get('[data-cy="password-input"]').type("1234Aa.")

      //Assert
      cy.get('[data-cy="error-message"]').should('be.visible')
    })
    it('button is disabled for unvalidated input.', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get('[data-cy="button-submit"]')

      //Assert
      cy.get('[data-cy="button-submit"]').should('be.disabled')
    })
    it('submits form on validated inputs', () => {
      //Arrange
      cy.visit('http://localhost:5173/')
      //Act
      cy.get('[data-cy="email-input"]').type("meliskabasakal33@example.com")
      cy.get('[data-cy="password-input"]').type("Password123!")
      cy.get('[data-cy="button-submit"]').click()
      

      //Assert
    })

  })
})

