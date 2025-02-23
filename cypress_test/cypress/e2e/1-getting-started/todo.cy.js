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
import { getProducts, getProductById } from "test-publish-es6-package";
import { Users } from 'users-es6-pactum-package'

describe("example to-do app", () => {
  const users = {};
  const result = {};
  const usersService = new Users("https://reqres.in/api");
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });

  before(() => {
    cy.wrap(getProducts()).then((res) => {
      expect(res.status).to.be.eql(200);
      console.log(res.data);
      result.product = res.data[0];
    });
  });

  it("using pactum api client read user", () => {
    cy.wrap(usersService.readUser('1')).then((res) => {
      expect(res.statusCode).to.be.eql(200);
      console.log(res.body.data.email);
      console.log(res.body.data.id);
      users.email = res.body.data.email;
    });
  });

  it("using pactum api client add users", () => {
    cy.wrap(usersService.addUser({
      "name": "morpheus",
      "job": "leader",
      "id": "966",
      "createdAt": "2025-02-22T17:32:18.618Z"
    })).then((res) => {
      expect(res.statusCode).to.be.eql(201);
      console.log(res.body.name);
      console.log(res.body.id);
      users.name = res.body.name;
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
