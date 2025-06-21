Blockly.Blocks['say_hello'] = {
  init: function() {
    this.appendDummyInput().appendField("say hello");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};
