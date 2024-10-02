const db = require("./db");
const request = require("supertest");
const { createApp } = require("./app");

describe('POST /users', () => {
    let app;
    beforeEach(() => {
        app = createApp(db);
    })
    describe('when the username and password missing', () => {
        // should respond with a status code of 400
        it('should response a 400 status code', async () => {
            const bodies = [
                { username: "Jhon Doe" },
                { password: "Jhon@123" },
                {},
            ];
            for (const body of bodies) {
                const response = await request(app).post("/users").send(body);
                expect(response.statusCode).toBe(400);
            }
        });
        // should respond with a json object containing message
        it('should respond with a json object containing message', async () => {
            const bodies = [
                { username: "Jhon Doe" },
                { password: "Jhon@123" },
                {},
            ];
            for (const body of bodies) {
                const response = await request(app).post("/users").send(body);
                expect(response.body.message).toBeDefined();
            }
        });
    });
    describe('given a username and password', () => {
        // should save the username and password to the database
        // should respond a 201 status code
        it('should response a 201 status code', async () => {
            const response = await request(app).post("/users").send({
                username: "Jhon Doe",
                password: "Jhone@123"
            });
            expect(response.statusCode).toBe(201);
        });
        // should specify json in the content type header
        it('should specify json in the content type header', async () => {
            const response = await request(app).post("/users").send({
                username: "Jahan Doe",
                password: "Jahan@123"
            });
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        });
        // should respond with a json object containing user id
        it('should respond with a json object containing user id', async () => {
            const response = await request(app).post("/users").send({
                username: "Jham Doe",
                password: "Jham@123"
            });
            expect(response.body.id).toBeDefined();
        });
    });
    describe('username already taken', () => { 
        // should respond a 409 status code if the username already taken
        it('should respond a 409 status code if the username already taken', async () => {
            const response = await request(app).post("/users").send({
                username: "Jhon Doe",
                password: "Jhone@123"
            });
            expect(response.statusCode).toBe(409);
        });
    });
});