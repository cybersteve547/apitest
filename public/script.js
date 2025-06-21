// Custom console output
console.log = (...args) => {
  const output = args.join(" ");
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += output + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

// Define generator AFTER everything loaded
Blockly.JavaScript['say_hello'] = function(block) {
  return "console.log('Hello!');\n";
};
console.log("say_hello generator from script.js:", Blockly.JavaScript['say_hello']);

// Inject Blockly
window.addEventListener("DOMContentLoaded", () => {
  const workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
  });

  document.getElementById("runButton").addEventListener("click", () => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log("Generated code:", code);
    try {
      eval(code);
    } catch (e) {
      console.log("Eval error:", e);
    }
  });
});
