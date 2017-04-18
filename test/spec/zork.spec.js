describe("Zork IX", function() {

  var zork

  beforeEach(function(){
      zork = new Zork();
  });

  it('should reset input after action', function() {
    zork.input = 'Open Sesame';
    zork.action();
    expect(zork.input).toBe('');
  });

  it('should set message to unknown when unable to parse', function() {
    zork.input = 'B@d M3$$@G3';
    zork.action();
    expect(zork.message).toBe('I don’t know what you mean.');
  });

  it('should execute command', function() {
    var command = new Command();
    spyOn(command, 'execute');
    spyOn(zork.Parser, 'parse').and.returnValue(command);
    zork.input = 'Open Sesame';

    zork.action();

    expect(command.execute).toHaveBeenCalled();
  });

});
