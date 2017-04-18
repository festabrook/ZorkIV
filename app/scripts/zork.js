function Zork(){
    this.Parser = new Parser();
    this.message = '';
    this.input = '';

    this.action = function() {
      var item = this.input.split(' ');
      this.Parser.parse().execute();
      if(item[0] == 'Open') {
        this.message = 'You look for a ' + item[1] + ' to open... but find none.';
      } else {
        this.message = 'I don’t know what you mean.';
      }
      this.input = '';
    }
}
