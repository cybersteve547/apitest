
const canvasrect = {
  init: function() {
    this.appendDummyInput('NAME')
      .appendField('fill rectangle at')
      .appendField(new Blockly.FieldNumber(0), 'x')
      .appendField(new Blockly.FieldNumber(0), 'y')
      .appendField('with a size of')
      .appendField(new Blockly.FieldNumber(50), 'w')
      .appendField(new Blockly.FieldNumber(50), 'h');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({canvasrect: canvasrect});
javascript.javascriptGenerator.forBlock['canvasrect'] = function() {
  const number_x = block.getFieldValue('x');
  const number_y = block.getFieldValue('y');
  const number_w = block.getFieldValue('w');
  const number_h = block.getFieldValue('h');

  // TODO: Assemble javascript into the code variable.
  const code = `ctx.fillRect(${number_x}, ${number_y}, ${number_w}, ${number_h});\n`;
  return code;
  }

