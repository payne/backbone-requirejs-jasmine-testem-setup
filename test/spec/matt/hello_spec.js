define([], function() {
  describe("Hello spec", function() {
      it("Should run an it within a describe", function() {
        let a = 2;
        let b = 2;
        expect(a+b).toEqual(4);
      });
  });  
});