const expect = require('chai').expect;
const db = require("../data/db.js");

describe('Find a car', () => {
  it('Get the car from post params', () => {
    return db('car').select("*").where('car_model_year', '2005')
      .then(response => {
        expect(typeof response).to.equal('array');
        expect(response[0].first_name).to.equal('Mollee')
        expect(response[0].last_name).to.equal('Breen')
        expect(response[0].email).to.equal('mbreeneb@cornell.edu')
        expect(response[0].country).to.equal('San Francisco')
        expect(response[0].car_model).to.equal('Audi')
        expect(response[0].car_model_year).to.equal('2005')
        expect(response[0].car_color).to.equal('Teal')
        expect(response[0].gender).to.equal('Female')
        expect(response[0].job_title).to.equal('Environmental Specialist')
        expect(response[0].bio).to.equal('Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.')
      });
  });
});