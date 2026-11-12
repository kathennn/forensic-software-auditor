#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const help = () => console.log('Forensic Software Auditor v1.0.0\n\nUsage:\n  npx forensic-software-auditor [repository-path] [--output report.md]\n  npx forensic-software-auditor --skill\n  npx forensic-software-auditor --help\n\nCreates a read-only file inventory. It does not execute project code or modify the target repository.');
if (args.includes('--help') || args.includes('-h')) { help(); process.exit(0); }
if (args.includes('--version') || args.includes('-v')) { console.log('1.0.0'); process.exit(0); }
if (args.includes('--skill')) { process.stdout.write(fs.readFileSync(path.join(root, 'skills/forensic-repository-audit/SKILL.md'), 'utf8')); process.exit(0); }
const oi=args.indexOf('--output'), output=oi>=0?args[oi+1]:null;
if(oi>=0&&(!output||output.startsWith('--'))){console.error('Error: --output requires a file path');process.exit(2);}
const targetArg=args.find((a,i)=>!a.startsWith('--')&&(oi<0||i!==oi+1));
const target=path.resolve(targetArg||'.');
if(!fs.existsSync(target)||!fs.statSync(target).isDirectory()){console.error('Not a directory: '+target);process.exit(2);}
const ignored=new Set(['.git','node_modules','.next','dist','build','coverage','.venv','venv','target']),rows=[];
function walk(dir,rel=''){for(const ent of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))){if(ignored.has(ent.name))continue;const abs=path.join(dir,ent.name),name=path.posix.join(rel,ent.name);try{const st=fs.lstatSync(abs);if(st.isSymbolicLink()){rows.push([name,'symlink',st.size,'EXCLUDED (symlink)']);continue;}if(st.isDirectory())walk(abs,name);else if(st.isFile())rows.push([name,path.extname(ent.name)||'(no extension)',st.size,'NOT REVIEWED']);}catch(e){rows.push([name,'unknown','—','UNREADABLE ('+(e.code||'error')+')']);}}}
walk(target);
const types={};for(const r of rows)types[r[1]]=(types[r[1]]||0)+1;
const lines=['# Repository inventory','', '- **Path:** '+target,'- **Generated:** '+new Date().toISOString(),'- **Mode:** read-only inventory; no project code executed.','- **Status:** inventory only; this is not a completed security or quality audit.','','## Summary','- Files inventoried: **'+rows.length+'**','- Excluded directories: '+[...ignored].join(', '),'','## File inventory','','| Path | Type | Bytes | Status |','|---|---|---:|---|',...rows.map(r=>'| '+r[0].replaceAll('|','\\|')+' | '+r[1]+' | '+r[2]+' | '+r[3]+' |'),'','## File types','',...Object.entries(types).sort((a,b)=>b[1]-a[1]).map(([k,v])=>'- '+k+': '+v),'','## Next steps','','Use the bundled forensic-repository-audit skill for controlled code, security, architecture, testing, dependency, deployment, accessibility and documentation reviews. This inventory is not a certification.',''];
const report=lines.join('\n');
if(output){const dest=path.resolve(output);fs.writeFileSync(dest,report);console.log('Inventory written to '+dest+' ('+rows.length+' files)');}else process.stdout.write(report);
