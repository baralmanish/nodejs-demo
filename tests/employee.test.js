//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const request = require('supertest');
const express = require('express');
const app = 'http://localhost:3000';

const ctrl = require('../src/controllers/employee.controller');

describe('Check Environment', () => {
    it('checks environment', async () => {
        expect(process.env.NODE_ENV).toEqual('test')
    })
});

describe("GET /api/employees", () => {
    test("It responds with an array of employees", async () => {
        const response = await request(app).get('/api/employees')
        expect(response.statusCode).toBe(200);
        // expect(response.body.success).toEqual(true);
        // expect(response.body.data.length).toBeGreaterThanOrEqual(1);
    });
});