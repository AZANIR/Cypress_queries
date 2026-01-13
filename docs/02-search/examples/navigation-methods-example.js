// ============================================================
// ПРИКЛАД: Навігаційні методи
// ОПИС: Демонстрація методів для навігації по DOM дереву
// ============================================================

// Приклад 1: children() - дочірні елементи
cy.get('.todo-list')
  .children()
  .should('have.length', 3)

// Приклад 2: parent() - батьківський елемент
cy.get('.toggle')
  .first()
  .parent('li')
  .should('exist')

// Приклад 3: closest() - найближчий предок
cy.get('.toggle')
  .first()
  .closest('li')
  .should('exist')

// Приклад 4: siblings() - сусідні елементи
cy.get('.todo-list li')
  .first()
  .siblings()
  .should('have.length', 2)

// Приклад 5: prev() - попередній елемент
cy.get('.todo-list li')
  .eq(1)
  .prev()
  .should('contain', 'Перша задача')
