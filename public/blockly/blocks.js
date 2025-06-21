Blockly.Blocks['say_hello'] = {
  init: function() {
    this.appendDummyInput().appendField("say hello");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

Blockly.JavaScript['say_hello'] = function(block) {
  return "const output = 'Hello!'; const consoleDiv = document.getElementById('console'); consoleDiv.innerHTML += output + '<br>'; consoleDiv.scrollTop = consoleDiv.scrollHeight;";
};
