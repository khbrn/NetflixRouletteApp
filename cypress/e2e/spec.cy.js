describe('Searching movie by "coco" keyword', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should load the search page with the most popular movies, with its number bigger than 0 ", () => {
    cy.get(".movie-list").find("li").should("have.length.above", 1);
  });

  it("should change searchbar value", () => {
    cy.get(".search-movie__bar").type("coco").should("have.value", "coco");
  });

  it("should change url address", () => {
    cy.get(".search-movie__bar").type("coco");
    cy.get(".button__submit").click();

    cy.url().should("include", "/coco");
  });

  it("should display results of searching", () => {
    cy.get(".search-movie__bar").type("coco");
    cy.get(".button__submit").click();

    cy.get(".movie-list").each((item) => {
      cy.wrap(item).contains("div", /coco/i).should("exist");
    });
  });

  it("should display movie info after clicking on the first search result ", () => {
    cy.get(".search-movie__bar").type("coco");
    cy.get(".button__submit")
      .click()
      .then(() => {
        cy.get(".movie-list>li")
          .first()
          .click()
          .then(() => {
            cy.get(".movie-details__data-title").should("exist");
          });
      });
  });

  it("should display movie info which contains 'coco' keyword after clicking on the first search result ", () => {
    cy.get(".search-movie__bar").type("coco");
    cy.get(".button__submit")
      .click()
      .then(() => {
        cy.get(".movie-list>li")
          .first()
          .click()
          .then(() => {
            cy.get(".movie-details__data-title")
              .contains("div", /coco/i)
              .should("exist");
          });
      });
  });
});
