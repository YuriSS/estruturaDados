var tree = require('estrutura_dados').Tree();

tree.push(0, {
  "teste": "teste numero 1",
  "prop": "prop 2"
});

tree.push(3, {
  "teste": "teste numero 2",
  "prop": "prop 2"
});

tree.push(1, {
  "teste": "teste numero 3",
  "prop": "prop 2"
});

// tree.pop();

tree.inorder(function(node) {
  node.eachProp(console.log);
});
