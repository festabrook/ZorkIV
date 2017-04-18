describe('Parser', function() {
  var parser;

  beforeEach(function(){
      parser = new Parser();
  }); 

  it('should parse input for open message', function() {
    var command = parser.parse('Open Sesame');
    expect(command.message).toBe('You look for a Sesame to open... but find none.');
  });

}
