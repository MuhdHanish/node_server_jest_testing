const { app } = require("./app");
const request = require("supertest");

describe('POST /users', () => {
    describe('when the username and password missing', () => {
        // should respond with a status code of 400
    });
    describe('given a username and password', () => {
        // should save teh username and password to the database
        // should respond a 200 status code
        it('should response a 200 status code', async () => {
            const response = await request(app).post("/users").send({
                username: "Jhon Doe",
                password: "Jhone@123"
            });
            expect(response.statusCode).toBe(200);
        })
        // should specify json in the content type header
        it('should specify json in the content type header', async () => {
            const response = await request(app).post("/users").send({
                username: "Jhon Doe",
                password: "Jhone@123"
            });
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })
        // should respond with a json object containing user id
        it('should respond with a json object containing user id', async () => {
            const response = await request(app).post("/users").send({
                username: "Jhon Doe",
                password: "Jhone@123"
            });
            expect(response.body.id).toBeDefined( );
        })
    });
});