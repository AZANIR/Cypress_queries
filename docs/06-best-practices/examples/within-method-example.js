// ============================================================
// ПРИКЛАД: Метод within() - обмеження контексту
// ОПИС: Демонстрація використання within() для обмеження пошуку
// ============================================================

// Приклад 1: Базове використання within()
cy.get('.todo-list').within(() => {
  cy.get('li')
    .should('have.length', 3)
})

// Приклад 2: within() для групування операцій
cy.get('.todo-list').within(() => {
  cy.get('li').first().should('exist')
  cy.get('li').last().should('exist')
})

// Приклад 3: Вкладені within()
cy.get('.todo-list').within(() => {
  cy.get('li').first().within(() => {
    cy.get('.toggle').should('exist')
  })
})
