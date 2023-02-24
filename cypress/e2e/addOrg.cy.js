/// <reference types="Cypress"/>

import { loginPage } from "../page_object.js/loginPage";
import { addOrg } from "../page_object.js/addOrganization";

const credentials = {
    validEmail: "dusan.srdjanov@gmail.com",
    validPassword: "Didaskal91"
};

describe("Create organization", () => {
    
    beforeEach("Visit site", () => {
        cy.intercept({
            method: "POST",
            url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        }).as("successfulLogin");

        cy.visit("/");
        loginPage.login(credentials.validEmail, credentials.validPassword);
        cy.wait("@successfulLogin").then((interception) => {
            console.log("INTERCEPTION", interception);
            expect(interception.response.statusCode).eq(200);
    });

    it("Create organization", () => {

        })
    })
})