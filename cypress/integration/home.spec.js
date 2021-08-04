// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom cypress commands
/// <reference types="../../support" />
describe('Tech Community Home', function () {
	it('Loads the Tech Community Home page on user request to root app URL', function () {
		cy.visit('/');
	});

	it.only("Displays Home page with correct elements", function () {
		cy.visit('/');

		cy.contains("Home").invoke("attr", "href").should("eq", "/");
		cy.contains("Groups").invoke("attr", "href").should("eq", "/groups");
		cy.get("img").invoke("attr", "src").should("eq", "/cypress_io_testing_hourglass.svg");
		cy.get("a[href='https://cypress.io']");
	});
});
