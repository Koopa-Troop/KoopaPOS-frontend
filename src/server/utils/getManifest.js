import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const getManifest = () => {
  let manifest;
  try {
    if (process.env.NODE_ENV === 'production') {
      manifest = JSON.parse(fs.readFileSync(`${process.cwd()}/src/server/public/manifest.json`, 'utf8'));
    } else {
      manifest = {
        'main.css': '/assets/app.css',
        'main.js': '/assets/app.js',
        'vendors.js': '/assets/vendor.js',
      };
    }
  } catch (err) {
    console.log(err);
  }
  return manifest;
};

export default getManifest;
