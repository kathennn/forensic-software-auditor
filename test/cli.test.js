import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const cli=path.join(root,'bin/forensic-software-auditor.js');
test('prints version and help',()=>{
 const v=spawnSync(process.execPath,[cli,'--version'],{encoding:'utf8'});
 assert.equal(v.status,0); assert.equal(v.stdout.trim(),'1.0.0');
 const h=spawnSync(process.execPath,[cli,'--help'],{encoding:'utf8'});
 assert.equal(h.status,0); assert.match(h.stdout,/read-only file inventory/i);
});
test('creates a read-only inventory and skips dependency folders',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'fsa-test-'));
 try {
  fs.writeFileSync(path.join(dir,'app.js'),'console.log(1)');
  fs.mkdirSync(path.join(dir,'node_modules'));
  fs.writeFileSync(path.join(dir,'node_modules','ignored.js'),'ignored');
  const r=spawnSync(process.execPath,[cli,dir],{encoding:'utf8'});
  assert.equal(r.status,0); assert.ok(r.stdout.includes('app.js'));
  assert.ok(!r.stdout.includes('ignored.js'));
  assert.ok(r.stdout.toLowerCase().includes('inventory only'));
  assert.equal(fs.existsSync(path.join(dir,'audit-inventory.md')),false);
 } finally { fs.rmSync(dir,{recursive:true,force:true}); }
});
