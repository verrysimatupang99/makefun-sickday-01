const line = 'Cannot come in today — my motivation returned a 404.';
const args = process.argv.slice(2);

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function printHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    printHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
