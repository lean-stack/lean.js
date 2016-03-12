
describe('Lean.js core', function() {
  describe('Global symbol lean', function() {
    it('should be defined and not null.', function() {
      expect(lean).to.not.be.undefined;
      expect(lean).to.not.be.null;
    });
    it('should have a version string property.', function() {
      expect(lean.VERSION).to.be.a('string');
    });
  });
});
