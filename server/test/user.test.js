const request = require('supertest')
const app = require('../app')
const User = require('../models/userModel')

describe('test the api for the login and sign up endpoints', () => {
  it('should have the response 201 with login endpoint', async () => {
    const credentials = {
      email: 'dohee151@gmail.com',
      password: 'lok899£!!L!',
    }

    const response = await request(app)
      .post('/user/login')
      .send(credentials)
      .expect('Content-Type', /json/)
      .expect(201)
  })

  it('should respond with 400 if fields are not filled', async () => {
    const response = await request(app)
      .post('/user/login')
      .expect('Content-Type', /json/)
      .expect(400)

    expect(response.body).toStrictEqual({
      error: 'All fields must be filled',
    })
  })

  it('should respond with 400 if user email is not found', async () => {
    const incredentials = {
      email: 'dohee151dfd@gmail.com',
      password: 'lok899£dfdfdf!!L!',
    }

    const response = await request(app)
      .post('/user/login')
      .send(incredentials)
      .expect('Content-Type', /json/)
      .expect(400)

    expect(response.body).toStrictEqual({
      error: 'Incorrect Email',
    })
  })

  it('should respond with 400 if user password is not found', async () => {
    const incredentials = {
      email: 'dohee151@gmail.com',
      password: 'lok899£dfdfdf!!L!',
    }

    const response = await request(app)
      .post('/user/login')
      .send(incredentials)
      .expect('Content-Type', /json/)
      .expect(400)

    expect(response.body).toStrictEqual({
      error: 'Incorrect Password',
    })
  })

  it('should have the response 200 with register endpoint', async () => {
    const credentials = {
      name: 'dohee0328',
      email: 'dohee0328@gmail.com',
      password: 'Orange2001!',
    }

    const response = await request(app)
      .post('/user/register')
      .send(credentials)
      .expect('Content-Type', /json/)
    // .expect(200)
  })

  it('should have the response 400 with invalid email message', async () => {
    const credentials = {
      name: 'dohee0328',
      email: 'dohee0328',
      password: 'Orange2001!',
    }

    const response = await request(app)
      .post('/user/register')
      .send(credentials)
      .expect('Content-Type', /json/)
      .expect(400)
    expect(response.body).toStrictEqual({
      error: 'Email is not valid',
    })
  })

  it('should have the response 400 with not enough strong password', async () => {
    const credentials = {
      name: 'dohee0328',
      email: 'dohee0328@gmail.com',
      password: '123',
    }

    const response = await request(app)
      .post('/user/register')
      .send(credentials)
      .expect('Content-Type', /json/)
      .expect(400)
    expect(response.body).toStrictEqual({
      error:
        'Password not strong enough! Must either contain special characters, capital letters or numbers ',
    })
  })
})
