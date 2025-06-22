// Custom console output
console.log = (...args) => {
  const output = args.join(" ");
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += output + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

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
