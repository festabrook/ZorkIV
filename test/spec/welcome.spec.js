
describe("Welcome page", function() {

  var welcome

  beforeEach(function(){
      welcome = new Welcome();
  });
  
  it("displays the welcome message", function() {
    expect(welcome.getMessage()).toEqual("Welcome back, Dungeon Master.");
  });
});
