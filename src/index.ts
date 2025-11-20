import {build} from './builder';
import type {BuildOptions} from "./types";
import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pkgJson = JSON.parse(readFileSync(join(__dirname, '../package.json'), 'utf-8'));

export {build};
export type {BuildOptions};

export const version = pkgJson.version;