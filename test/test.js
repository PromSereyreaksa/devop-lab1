import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';

describe('GET /', async () => {
  const response = await request(app).get('/')
  expect(response.status).to.equal(200)
})
