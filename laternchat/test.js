import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParseLib = require('pdf-parse/lib/pdf-parse.js');

console.log('pdfParseLib type:', typeof pdfParseLib);
