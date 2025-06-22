// Custom console output
console.log = (...args) => {
  const output = args.join(" ");
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += output + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

// Inject Blockly
window.addEventListener("DOMContentLoaded", () => {
  const workspace = Blockly.inject(
    document.getElementById('blocklyDiv'), { /* config */ });

  document.getElementById("runButton").addEventListener("click", () => {
    const code = javascript.javascriptGenerator.workspaceToCode(workspace);
    console.log("Generated code:", code);
    try {
      eval(code);
    } catch (e) {
      console.log("Eval error:", e);
    }
  });
});
