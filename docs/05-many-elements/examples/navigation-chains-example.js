// ============================================================
// ПРИКЛАД: Навігаційні ланцюжки
// ОПИС: Демонстрація методів для навігації по сусідніх елементах
// ============================================================

// Приклад 1: nextAll() - всі наступні сусідні
cy.get('.todo-list li')
  .first()
  .nextAll()
  .should('have.length', 3)

// Приклад 2: prevAll() - всі попередні сусідні
cy.get('.todo-list li')
  .last()
  .prevAll()
  .should('have.length', 3)

// Приклад 3: nextUntil() - наступні до певного
cy.get('.todo-list li')
  .first()
  .nextUntil('.todo-list li:last-child')
  .should('have.length', 2)

// Приклад 4: parents() - всі батьківські елементи
cy.get('.toggle')
  .first()
  .parents('li')
  .should('have.length', 1)
