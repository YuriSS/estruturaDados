var filo = require('estrutura_dados').Filo();

filo.push({
  "teste": "teste numero 1",
  "prop": "prop 2"
});

filo.push({
  "teste": "teste numero 2",
  "prop": "prop 2"
});

filo.push({
  "teste": "teste numero 3",
  "prop": "prop 2"
});

filo.pop();

filo.each(function(node) {
  node.eachProp(console.log);
});
