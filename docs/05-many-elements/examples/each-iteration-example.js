// ============================================================
// ПРИКЛАД: Метод each() - ітерація через елементи
// ОПИС: Демонстрація використання each() для роботи з колекціями
// ============================================================

// Приклад 1: Базове використання each()
cy.get('.todo-list li')
  .each(($el) => {
    cy.wrap($el)
      .should('be.visible')
  })

// Приклад 2: each() з індексом та списком
cy.get('.todo-list li')
  .each(($el, index, $list) => {
    expect(index).to.be.lessThan($list.length)
  })

// Приклад 3: each() для взаємодії
cy.get('.todo-list li')
  .each(($el) => {
    cy.wrap($el)
      .find('.toggle')
      .check()
  })

// Приклад 4: each() для збору даних
const texts = []
cy.get('.todo-list li')
  .each(($el) => {
    texts.push($el.text())
  })
  .then(() => {
    expect(texts).to.have.length(3)
  })
