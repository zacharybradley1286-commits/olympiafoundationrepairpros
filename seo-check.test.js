const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const domain = 'https://olympiafoundationrepairpros.com';

const htmlFiles = fs.readdirSync(root)
  .filter((name) => name.endsWith('.html'))
  .map((name) => name)
  .concat(fs.existsSync(path.join(root, 'blog'))
    ? fs.readdirSync(path.join(root, 'blog')).filter((name) => name.endsWith('.html')).map((name) => `blog/${name}`)
    : []);

function cleanUrl(file) {
  if (file === 'index.html') return `${domain}/`;
  if (file === 'blog/index.html') return `${domain}/blog/`;
  return `${domain}/${file.replace(/\.html$/, '')}`;
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (canonical) assert.equal(canonical[1], cleanUrl(file), `${file} canonical must use the final clean URL`);

  const ogUrl = html.match(/<meta property="og:url" content="([^"]+)"/);
  if (ogUrl) assert.equal(ogUrl[1], cleanUrl(file), `${file} og:url must use the final clean URL`);

  assert.doesNotMatch(html, /(?:href=|location\.href\s*=\s*)["'][^"'#?]+\.html(?:[#?][^"']*)?["']/, `${file} must not use redirected .html URLs`);

  assert.doesNotMatch(html, /"sameAs": "https:\/\/en\.wikipedia\.org\//, `${file} must not use Wikipedia as business or service entity grounding`);

  if (file !== 'referral-disclosure.html') {
    assert.doesNotMatch(html, /referral service|not a contractor|how we are paid/i, `${file} must not contain lead gen or referral verbiage`);
  }
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
assert.doesNotMatch(sitemap, /<loc>[^<]*\.html<\/loc>/, 'sitemap must contain final clean URLs');

const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.doesNotMatch(index, /referral service/i, 'homepage must not contain referral service verbiage');
assert.match(index, /#organization/, 'homepage Service schema must reference the Organization entity');

console.log(`Olympia Foundation SEO checks passed for ${htmlFiles.length} HTML files`);
