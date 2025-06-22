const my_block = {
  init: function() {
    this.appendDummyInput('NAME')
      .appendField('say hello');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({my_block: my_block});
