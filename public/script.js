console.log = (...args) => {
  const output = args.join(" ");
  const consoleDiv = document.getElementById("console");
  consoleDiv.innerHTML += output + "<br>";
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

Blockly.JavaScript['say_hello'] = function(block) {
  return "console.log('Hello!');\n";
};

const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox'),
});

async function runCode() {
  console.log("test");
  try {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
  } catch (e) {
    console.log(e);
  }
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
}