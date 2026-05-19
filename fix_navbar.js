const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.js', 'utf8');

content = content.replace(/const \[mobileSub, setMobileSub\] = useState\(null\);/g, 'const [openMenus, setOpenMenus] = useState({});');
content = content.replace(/setMobileSub\(null\);/g, 'setOpenMenus({});');
content = content.replace(/setMobileSub\(\(s\) => \(s === key \? null : key\)\);/g, 'setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));');
content = content.replace(/mobileSub === "([^"]+)"/g, 'openMenus["$1"]');

fs.writeFileSync('src/components/Navbar.js', content);
