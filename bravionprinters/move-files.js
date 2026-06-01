const fs = require('fs');
const path = require('path');

const src = 'src/app/pages';
const dest = 'src/app/components';

const dirsToMove = [
  'about', 'blog', 'clients', 'contact', 'home', 'portfolio', 'service-detail'
];

for (const dir of dirsToMove) {
  const sourcePath = path.join(src, dir);
  const destPath = path.join(dest, dir);
  if (fs.existsSync(sourcePath)) {
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved ${dir}`);
  }
}

// Move sub-services
const servicesSrc = 'src/app/pages/services';
const subServices = [
  'corporate-branding', 'digital-design', 'event-branding', 
  'office-branding', 'printing-stationery', 'signage-branding', 'vehicle-branding'
];

for (const dir of subServices) {
  const sourcePath = path.join(servicesSrc, dir);
  const destPath = path.join(dest, dir);
  if (fs.existsSync(sourcePath)) {
    fs.renameSync(sourcePath, destPath);
    console.log(`Moved ${dir}`);
  }
}

// Move services.component.ts into a new services folder in components
if (!fs.existsSync(path.join(dest, 'services'))) {
  fs.mkdirSync(path.join(dest, 'services'));
}
const serviceFile = path.join(servicesSrc, 'services.component.ts');
if (fs.existsSync(serviceFile)) {
  fs.renameSync(serviceFile, path.join(dest, 'services', 'services.component.ts'));
  console.log(`Moved services.component.ts`);
}

// remove pages/services if empty
if (fs.existsSync(servicesSrc)) {
  fs.rmdirSync(servicesSrc);
}
