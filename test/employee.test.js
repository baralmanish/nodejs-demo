//During the test the env variable is set to test
const dotenv =  require('dotenv')
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
dotenv.config({ path: envFile })

const request = require('supertest');
const express = require('express');
const APP_PORT = process.env.APP_PORT || 5000;
const app = 'http://localhost:' + APP_PORT;

const ctrl = require('../src/controllers/employee.controller');

describe('Check Environment', () => {
    it('checks environment', async () => {
        expect(process.env.NODE_ENV).toEqual('test')
    })
    it('checks APP_PORT', async () => {
        expect(APP_PORT).toEqual('8000')
    })
});

describe("GET /api/employees", () => {
    test("It responds with an array of employees", async () => {
        const response = await request(app).get('/api/employees')
        expect(response.statusCode).toBe(200);
        expect(response.body.success).toEqual(true);
        expect(response.body.data.length).toBeGreaterThanOrEqual(1);
    });
});