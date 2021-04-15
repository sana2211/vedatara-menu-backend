const { expect } = require('chai');
const server = require( '../app' );

describe( 'App', () => {
  /*it( 'GET / responds with 200 containing "Hello, world!"', () => {
    return supertest( server )
      .get( '/' )
      .expect( 200, 'Hello, World!' );
  } );*/

  it( 'GET / responds with 200 containing users list', () => {
    return supertest( server )
      .get( '/api/users' )
      .expect(res=>{
        expect(200, res.body.length).to.greaterThan(1)
        expect(typeof(res.body)).to.eql('object')
      })
  } );


  it( 'GET / responds with User doesnt exist', () => {
    return supertest( server )
      .get( '/api/users/checkuser/jondoe1' )
      .expect(res=>{
        expect(res.body).to.eql( {
            "error": {
              "message": "User doesn't exist"
            }
          })
       })
  } );

  it( 'GET / responds with User info', () => {
    return supertest( server )
      .get( '/api/users/1' )
      .expect(res=>{
        expect(res.body).to.eql( {
          "id": 1,
          "fullname": "Jon Doe 1",
          "email": "jondoe1@email.com",
          "password": "password",
          "created_at": "2021-03-16T18:00:52.974Z",
          "updated_at": "2021-03-16T18:00:52.974Z"
      })
       })
  } );


  it( 'GET / responds with 200 containing bookmarks list', () => {
    return supertest( server )
      .get( '/api/bookmarks' )
      .expect(res=>{
        expect(200, res.body.length).to.greaterThan(1)
        expect(typeof(res.body)).to.eql('object')
      })
  } );

});