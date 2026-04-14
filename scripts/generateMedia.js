const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');
const ASSETS_DIR = path.join(SRC_DIR, 'assets');
const IMAGES_DIR = path.join(ASSETS_DIR, 'images');
const VIDEOS_DIR = path.join(ASSETS_DIR, 'videos');
const OUTPUT_FILE = path.join(SRC_DIR, 'data', 'mediaData.js');

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const VIDEO_EXTS = ['.mp4', '.webm', '.ogg'];

function formatTitle(filename) {
    const nameWithoutExt = path.parse(filename).name;
    return nameWithoutExt
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function formatCategoryName(name) {
    if (name === 'Foundation Videos') return name;
    return name
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase());
}

function generateVarName(category, filename, type) {
    const cleanCat = category.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    const cleanFile = path.parse(filename).name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
    return `${type}_${cleanCat}_${cleanFile}`;
}

function processDirectory(dirPath, extList, typePrefix) {
    const categories = {};
    if (!fs.existsSync(dirPath)) return categories;

    const items = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const item of items) {
        if (item.isDirectory()) {
            const categoryName = item.name;
            const catPath = path.join(dirPath, categoryName);
            const files = fs.readdirSync(catPath);
            categories[categoryName] = [];
            
            for (const file of files) {
                if (extList.includes(path.extname(file).toLowerCase())) {
                    categories[categoryName].push({
                        fileName: file,
                        relPath: `../assets/${typePrefix}s/${categoryName}/${file}`,
                        title: formatTitle(file)
                    });
                }
            }
        } else if (item.isFile() && extList.includes(path.extname(item.name).toLowerCase())) {
            // Put loose videos in "Foundation Videos". Ignore loose images to prevent clutter.
            if (typePrefix === 'video') {
                if (!categories['Foundation Videos']) {
                    categories['Foundation Videos'] = [];
                }
                categories['Foundation Videos'].push({
                    fileName: item.name,
                    relPath: `../assets/${typePrefix}s/${item.name}`,
                    title: formatTitle(item.name)
                });
            }
        }
    }
    
    return categories;
}

const photoData = processDirectory(IMAGES_DIR, IMAGE_EXTS, 'image');
const videoData = processDirectory(VIDEOS_DIR, VIDEO_EXTS, 'video');

let outData = `// Auto-generated media data\n// Do not edit manually. Run 'npm run generate-media' to update.\n\n`;

let idCounter = 1;

for (const [category, files] of Object.entries(photoData)) {
    for (const file of files) {
        const varName = generateVarName(category, file.fileName, 'img');
        file.varName = varName;
        file.id = `img_${idCounter++}`;
        outData += `import ${varName} from '${file.relPath.replace(/\\/g, '/')}';\n`;
    }
}

for (const [category, files] of Object.entries(videoData)) {
    for (const file of files) {
        const varName = generateVarName(category, file.fileName, 'vid');
        file.varName = varName;
        file.id = `vid_${idCounter++}`;
        outData += `import ${varName} from '${file.relPath.replace(/\\/g, '/')}';\n`;
    }
}

outData += `export const photoCategories = [\n`;
for (const [category, files] of Object.entries(photoData)) {
    if (files.length === 0) continue;
    
    outData += `  {\n    name: ${JSON.stringify(formatCategoryName(category))},\n    photos: [\n`;
    for (const file of files) {
        outData += `      { id: '${file.id}', src: ${file.varName}, alt: ${JSON.stringify(formatCategoryName(category) + ' - ' + file.title)} },\n`;
    }
    outData += `    ]\n  },\n`;
}
outData += `];\n\n`;

outData += `export const videoCategories = [\n`;
for (const [category, files] of Object.entries(videoData)) {
    if (files.length === 0) continue;
    
    outData += `  {\n    name: ${JSON.stringify(formatCategoryName(category))},\n    videos: [\n`;
    for (const file of files) {
        outData += `      { id: '${file.id}', src: ${file.varName}, title: ${JSON.stringify(file.title)}, thumb: '' },\n`;
    }
    outData += `    ]\n  },\n`;
}
outData += `];\n\n`;

// Keep backward compatibility for standard imports if needed
outData += `export const videoGallery = videoCategories.flatMap(c => c.videos);\n`;

fs.writeFileSync(OUTPUT_FILE, outData, 'utf-8');
console.log(`Successfully generated mediaData.js with ${Object.keys(photoData).length} photo categories and ${Object.keys(videoData).length} video categories.`);
