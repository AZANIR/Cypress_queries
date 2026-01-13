// ============================================================
// ПРИКЛАД: Методи find() та contains()
// ОПИС: Демонстрація пошуку вкладених елементів та за текстом
// ============================================================

// Приклад 1: find() - пошук всередині елемента
cy.get('.todo-list')
  .find('li')
  .should('have.length', 3)

// Приклад 2: contains() - пошук за текстом
cy.contains('Перша задача')
  .should('exist')

// Приклад 3: contains() з селектором
cy.contains('.todo-list li', 'Перша')
  .should('exist')

// Приклад 4: contains() як метод ланцюжка
cy.get('.todo-list')
  .contains('Перша')
  .should('exist')

// Приклад 5: Комбінація find() та contains()
cy.get('.todo-list')
  .find('li')
  .contains('Третя')
  .should('exist')
