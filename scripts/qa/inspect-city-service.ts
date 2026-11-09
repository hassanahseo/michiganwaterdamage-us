import fs from 'node:fs';
import * as cheerio from 'cheerio';
import { get5WordShingles, jaccardSimilarity } from './similarity';

const h1 = fs.readFileSync('dist/grand-rapids-mi/biohazard-cleanup/index.html', 'utf8');
const h2 = fs.readFileSync('dist/grand-rapids-mi/fire-damage/index.html', 'utf8');

const $1 = cheerio.load(h1);
const $2 = cheerio.load(h2);
$1('script, style, noscript, nav, header, footer').remove();
$2('script, style, noscript, nav, header, footer').remove();

const t1 = $1('main').text();
const t2 = $2('main').text();

const s1 = get5WordShingles(t1);
const s2 = get5WordShingles(t2);

const shared = [...s1].filter((x) => s2.has(x));
console.log('Sim:', jaccardSimilarity(s1, s2));
console.log('Total s1:', s1.size, 'Total s2:', s2.size, 'Shared:', shared.length);
console.log('Sample shared:', shared.slice(0, 20));
