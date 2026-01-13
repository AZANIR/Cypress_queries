// ============================================================
// ПРИКЛАД: Метод filter() - фільтрація елементів
// ОПИС: Демонстрація використання filter() для вибору підмножини
// ============================================================

// Приклад 1: filter() за класом
cy.get('.todo-list li')
  .filter('.completed')
  .should('have.length', 1)

// Приклад 2: filter() з псевдокласом
cy.get('.todo-list li')
  .filter(':visible')
  .should('have.length', 3)

// Приклад 3: filter() за текстом
cy.get('.todo-list li')
  .filter(':contains("Активна")')
  .should('have.length', 2)

// Приклад 4: filter() з функцією
cy.get('.todo-list li')
  .filter((el) => {
    return Cypress.$(el).text().includes('Активна')
  })
  .should('have.length', 2)
