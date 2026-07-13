const fs = require('fs');
const path = require('path');

console.log('🔍 Running senior developer sanity checks...');

let failed = false;

// 1. Check src/index.html base href configuration
const indexHtmlPath = path.join(__dirname, 'src', 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  const content = fs.readFileSync(indexHtmlPath, 'utf8');
  const baseHrefRegex = /<base\s+href="([^"]*)"/i;
  const match = content.match(baseHrefRegex);
  if (match) {
    const baseHref = match[1];
    if (baseHref !== '/') {
      console.error(`❌ ERROR: src/index.html base href is set to "${baseHref}".`);
      console.error(`   For local development, it MUST be set to "/".`);
      console.error(`   Production base href is managed automatically via angular.json configurations.`);
      failed = true;
    } else {
      console.log('✅ src/index.html has correct base href ("/") for local dev.');
    }
  } else {
    console.warn('⚠️ WARNING: No <base href> tag found in src/index.html.');
  }

  // Check for common typos like text-white-600
  if (content.includes('text-white-600')) {
    console.error('❌ ERROR: Found invalid Tailwind utility "text-white-600" in src/index.html.');
    failed = true;
  }
} else {
  console.error('❌ ERROR: src/index.html not found.');
  failed = true;
}

// 2. Check angular.json base href configuration
const angularJsonPath = path.join(__dirname, 'angular.json');
if (fs.existsSync(angularJsonPath)) {
  try {
    const config = JSON.parse(fs.readFileSync(angularJsonPath, 'utf8'));
    const projects = config.projects || {};
    for (const projectName in projects) {
      const project = projects[projectName];
      const buildOptions = project.architect?.build?.options || {};
      
      // Global option check
      if (buildOptions.baseHref !== undefined) {
        console.error(`❌ ERROR: "baseHref" should NOT be defined globally in projects.${projectName}.architect.build.options.`);
        console.error(`   This breaks local development. Define it only under the production configuration.`);
        failed = true;
      }
      
      // Production config check
      const productionConfig = project.architect?.build?.configurations?.production || {};
      if (!productionConfig.baseHref) {
        console.error(`❌ ERROR: "baseHref" is missing from the production configuration of "${projectName}".`);
        console.error(`   Production builds must specify "baseHref": "/bravionprinters/" for correct subpath routing.`);
        failed = true;
      } else {
        console.log(`✅ Production configuration for "${projectName}" contains baseHref.`);
      }
    }
  } catch (err) {
    console.error('❌ ERROR: Failed to parse angular.json:', err.message);
    failed = true;
  }
}

// 3. Scan src/app/pages and components for class typos and red-on-red hover bugs
function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('text-white-600')) {
        console.error(`❌ ERROR: Found invalid Tailwind class "text-white-600" in: ${fullPath}`);
        failed = true;
      }
      if (content.includes('bg-[#e10600]') && content.includes('group-hover:text-[#e10600]')) {
        console.error(`❌ ERROR: Potential invisible text bug (red text on red background) in: ${fullPath}`);
        failed = true;
      }
    }
  }
}
scanDir(path.join(__dirname, 'src', 'app'));

if (failed) {
  console.error('\n🛑 Sanity checks FAILED. Please correct the errors above before running or building the app.');
  process.exit(1);
} else {
  console.log('\n🌟 Sanity checks PASSED. Your configuration is pristine and ready.');
  process.exit(0);
}
