#!/usr/bin/env node
const { readStdin } = require('./adapter');
readStdin().then(raw => {
  try {
    const input = JSON.parse(raw);
    const filePath = input.path || input.file || '';
    if (/\.(env|key|pem)$|\.env\.|credentials|secret/i.test(filePath)) {
      console.error('[XIAOZHI] WARNING: Reading sensitive file: ' + filePath);
      console.error('[XIAOZHI] Ensure this data is not exposed in outputs');
    }
  } catch {}
  process.stdout.write(raw);
}).catch(() => process.exit(0));
