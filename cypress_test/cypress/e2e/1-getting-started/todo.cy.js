/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
// import { getProducts, getProductById } from "test-publish-es6-package";
import { readUser } from "../../api/Users";

describe("example to-do app", () => {
  const result = {};
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  before(() => {
    // cy.wrap(getProducts()).then((res) => {
    //   expect(res.status).to.be.eql(200);
    //   console.log(res.data);
    //   result.product = res.data[0];
    // });
  });

  it.only("displays two todo", () => {
    console.log(readUser());
    cy.wrap(readUser()).then((res) => {
      expect(res.statusCode).to.be.eql(200);
      console.log(res.body.data.email);
      result.product = res.body.data.email;
    });
  });

  it("displays two todo items by default2", () => {
    cy.get(".todo-list li").should("have.length", 2);
    console.log(result);
  });

  it("click to todo and type result product name", () => {
    cy.get('[data-test="new-todo"]').type(result.product.title).type("{enter}");
    cy.get(".todo-list li").last().should("have.text", result.product.title);
  });

  it("fetch non exist", () => {
    cy.wrap(getProductById("99")).then((res) => {
      expect(res.status).to.be.eql(200);
      console.log(res.data);
      result.product = res.data[0];
    });
  });
});
