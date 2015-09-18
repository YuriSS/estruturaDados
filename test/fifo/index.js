var fifo = require('estrutura_dados').Fifo();

fifo.push({
  "teste": "teste numero 1",
  "prop": "prop 2"
});

fifo.push({
  "teste": "teste numero 2",
  "prop": "prop 2"
});

fifo.push({
  "teste": "teste numero 3",
  "prop": "prop 2"
});

fifo.pop();

fifo.each(function(node) {
  node.eachProp(console.log);
});
