// ============================================================
// ПРИКЛАД: Метод not() - виключення елементів
// ОПИС: Демонстрація використання not() для виключення
// ============================================================

// Приклад 1: not() за класом
cy.get('.todo-list li')
  .not('.completed')
  .should('have.length', 2)

// Приклад 2: not() за текстом
cy.get('.todo-list li')
  .not(':contains("Виконана")')
  .should('have.length', 2)

// Приклад 3: not() з функцією
cy.get('.todo-list li')
  .not((el) => {
    return Cypress.$(el).hasClass('completed')
  })
  .should('have.length', 2)
