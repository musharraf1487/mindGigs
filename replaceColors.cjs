const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
    { p: /45\s*,\s*158\s*,\s*95/g, r: '255,155,81' }, // old gb
    { p: /10\s*,\s*46\s*,\s*26/g, r: '37,52,63' },   // old gd
    { p: /78\s*,\s*203\s*,\s*135/g, r: '255,178,122' }, // old gl
    { p: /26\s*,\s*184\s*,\s*160/g, r: '191,201,209' }, // old teal to muted blue
];

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (file.match(/\.(js|jsx|css)$/)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            for (const { p, r } of replacements) {
                if (content.match(p)) {
                    content = content.replace(p, r);
                    changed = true;
                }
            }
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

processDir(srcDir);
console.log('Done');
