const fp = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(fp).toString().trim();

console.log(`    8888888888  888    88888
88     88   88 88   88  88
 8888  88  88   88  88888
    88 88 888888888 88   88
88888888  88 88     88 88    888888

88  88  88   888    88888    888888
88  88  88  88 88   88  88  88
88 8888 88 88   88  88888    8888
888  888 888888888 88  88      88
88  88  88     88 88   88888888`);