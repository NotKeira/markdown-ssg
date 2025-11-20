import { build } from './builder';

const args = process.argv.slice(2);

if (args.length < 2 ) {
    console.error('Usage: markdown-ssg <input> <output>');
    process.exit(1);
}

const [input, output] = args;

await build({ input, output, clean: true});