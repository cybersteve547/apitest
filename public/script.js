console.log = (...args) => {
  const output = args.join(" ");
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += output + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

Blockly.JavaScript['say_hello'] = function(block) {
  return "console.log('Hello!');\n";
};

let workspace;

window.addEventListener("DOMContentLoaded", () => {
workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
});
console.log('Current XML:', Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)));

  document.getElementById("runButton").addEventListener("click", async () => {
  console.log("Workspace count of top blocks:", workspace.getTopBlocks().length);
  workspace.getTopBlocks().forEach((b, i) => {
    console.log(`Block #${i} type:`, b.type);
  });
  console.log("test");
  console.log("Registered generators:", Object.keys(Blockly.JavaScript));
  console.log('Current XML:', Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)));
  let code = ""
  try {
    const block = workspace.getTopBlocks()[0];
    const code1 = Blockly.JavaScript[block.type](block);
    console.log("Code from single block generator:", code1);
    code = Blockly.JavaScript.workspaceToCode(workspace);
  } catch (e) {
    console.log(e);
  }
  console.log('Generated code:', typeof code, code);
  console.log('Generated code:', code);

  const response = await fetch('/api/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });

  const result = await response.json();
  console.log(result);
  try {
    eval(result);
  } catch (e) {
    console.log(e);
  }
  alert('Backend says: ' + result.output);
});
});