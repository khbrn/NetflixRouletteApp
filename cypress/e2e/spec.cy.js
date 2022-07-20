describe('Searching movie by "coco" keyword', () => {
  beforeEach(() => {
    cy.visit("/");
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
});
