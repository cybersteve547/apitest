Blockly.Blocks['say_hello'] = {
  init: function() {
    this.appendDummyInput().appendField("say hello");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

Blockly.JavaScript['say_hello'] = function(block) {
  return "console.log('Hello!');";
};
