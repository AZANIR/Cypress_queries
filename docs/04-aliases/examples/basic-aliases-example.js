// ============================================================
// ПРИКЛАД: Аліаси - базове використання
// ОПИС: Демонстрація створення та використання аліасів
// ============================================================

// Приклад 1: Створення та використання аліасу
cy.get('.new-todo').as('todoInput')
cy.get('@todoInput')
  .type('Задача')

// Приклад 2: Використання аліасу в різних місцях
cy.get('.new-todo').as('input')
cy.get('@input').type('Текст')
cy.get('@input').should('have.value', 'Текст')
cy.get('@input').clear()

// Приклад 3: Кілька аліасів
cy.get('.new-todo').as('input')
cy.get('.todo-list').as('list')
cy.get('@input').type('Задача{enter}')
cy.get('@list').find('li').should('have.length', 1)
