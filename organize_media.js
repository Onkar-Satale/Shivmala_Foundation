const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const publicImagesDir = path.join(rootDir, 'public', 'images');
const publicVideosDir = path.join(rootDir, 'public', 'videos');

const srcAssetsImgDir = path.join(rootDir, 'src', 'assets', 'images');
const srcAssetsVidDir = path.join(rootDir, 'src', 'assets', 'videos');
const dataDir = path.join(rootDir, 'src', 'data');

const categories = [
  "Donation Events",
  "Education Events",
  "Digital Knowledge Parv 1",
  "Free Education Workshop for Shivmala",
  "Medical Camp Events",
  "Social Awareness Program Events",
  "Foundation Volunteer Team",
  "Shivmala Foundation News"
];

// Helper to make directory if not exists
const mkdirSafe = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

mkdirSafe(srcAssetsImgDir);
mkdirSafe(srcAssetsVidDir);
mkdirSafe(dataDir);
categories.forEach(cat => mkdirSafe(path.join(srcAssetsImgDir, cat)));

// Get images
const allImages = fs.readdirSync(publicImagesDir).filter(f => f.startsWith('IMG-'));
const sortedImages = allImages.sort();

let jsContent = `// Auto-generated media data\n\n`;
let categoryData = [];

let imageIndex = 0;
for (let i = 0; i < categories.length; i++) {
  const cat = categories[i];
  const catSlug = cat.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const catPhotos = [];
  
  // Distribute roughly evenly
  const perCategory = Math.ceil(sortedImages.length / categories.length);
  const imagesForCat = sortedImages.slice(imageIndex, imageIndex + perCategory);
  
  imagesForCat.forEach((imgFile, idx) => {
    const oldPath = path.join(publicImagesDir, imgFile);
    const ext = path.extname(imgFile);
    const newFileName = `${catSlug}-${idx + 1}${ext}`;
    const newPath = path.join(srcAssetsImgDir, cat, newFileName);
    
    // Copy the file
    fs.copyFileSync(oldPath, newPath);
    
    // Add import statement
    const importName = `img_${catSlug}_${idx + 1}`.replace(/-/g, '_');
    // Using string interpolation securely
    jsContent += `import ${importName} from '../assets/images/${cat}/${newFileName}';\n`;
    
    catPhotos.push(`{ id: '${importName}', src: ${importName}, alt: '${cat} - ${idx + 1}' }`);
  });
  
  imageIndex += perCategory;
  
  categoryData.push({
    name: cat,
    photosStr: `[\n    ${catPhotos.join(',\n    ')}\n  ]`
  });
}

// Get videos
const allVideos = fs.readdirSync(publicVideosDir).filter(f => f.startsWith('VID-') || f.endsWith('.mp4'));
const sortedVideos = allVideos.sort();

let videoData = [];
sortedVideos.forEach((vidFile, idx) => {
  const oldPath = path.join(publicVideosDir, vidFile);
  const ext = path.extname(vidFile);
  const newFileName = `video-${idx + 1}${ext}`;
  const newPath = path.join(srcAssetsVidDir, newFileName);
  
  // Copy the file
  fs.copyFileSync(oldPath, newPath);
  
  const importName = `vid_${idx + 1}`;
  jsContent += `import ${importName} from '../assets/videos/${newFileName}';\n`;
  
  videoData.push(`{ id: '${importName}', src: ${importName}, title: 'Shivmala Foundation Video ${idx + 1}', thumb: '' }`);
});

jsContent += `\n\nexport const photoCategories = [\n`;
categoryData.forEach(cat => {
  jsContent += `  {\n    name: "${cat.name}",\n    photos: ${cat.photosStr}\n  },\n`;
});
jsContent += `];\n\n`;

jsContent += `export const videoGallery = [\n  ${videoData.join(',\n  ')}\n];\n`;

fs.writeFileSync(path.join(dataDir, 'mediaData.js'), jsContent);

console.log("Media restructuring complete. mediaData.js generated.");
