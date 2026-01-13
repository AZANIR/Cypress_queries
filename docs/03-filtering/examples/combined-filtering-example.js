// ============================================================
// ПРИКЛАД: Комбінована фільтрація
// ОПИС: Демонстрація комбінації різних методів фільтрації
// ============================================================

// Приклад 1: Комбінація filter() та not()
cy.get('.todo-list li')
  .not('.completed')
  .filter(':contains("Активна")')
  .should('have.length', 2)

// Приклад 2: Множинна фільтрація
cy.get('.todo-list li')
  .not('.completed')
  .filter(':contains("Важлива")')
  .first()
  .should('exist')

// Приклад 3: Фільтрація з функцією
cy.get('.todo-list li')
  .filter((el) => {
    const text = Cypress.$(el).text()
    return text.includes('Активна') || text.includes('Важлива')
  })
  .should('have.length', 3)
