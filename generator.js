const yaml = require('js-yaml');
const fs = require('fs');

// Load YAML file
const fileContents = fs.readFileSync('map.yml', 'utf8');
const data = yaml.load(fileContents);

let resultJson = {}

function traverse(node, result) {
    for (const key in node) {
        if (typeof node[key] === 'object' && !Array.isArray(node[key])) {
            result[key] = {};
            traverse(node[key], result[key]);
        } else {
            result[key] = node[key];
        }
    }
}

traverse(data, resultJson);

console.log(JSON.stringify(resultJson, null, 2));