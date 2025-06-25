
const toolbox = {
  // There are two kinds of toolboxes. The simpler one is a flyout toolbox.
  kind: 'flyoutToolbox',
  // The contents is the blocks and other items that exist in your toolbox.
  contents: [
    {
      kind: 'block',
      type: 'controls_if'
    },
    {
      kind: 'block',
      type: 'controls_whileUntil'
    }
    // You can add more blocks to this array.
  ]
};

// Passes the injection div.
const workspace = Blockly.inject(
    document.getElementById('blocklyDiv'), {toolbox:toolbox});

javascriptGenerator.addReservedWords('code');
alert("1");

function runCode() {
  alert("2");
  var code = javascriptGenerator.workspaceToCode(workspace);
  alert("3");
  alert(code);
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}