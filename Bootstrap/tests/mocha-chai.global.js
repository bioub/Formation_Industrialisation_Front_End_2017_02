var expect = chai.expect;

describe('Tests de la fonction addition', function() {

    it('devrait retournée 3 si appelée avec 1 et 2', function() {
        expect(addition(1, 2)).to.equal(3);
    });

});