import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'sistema-solar');
  
  try {
    const files = fs.readdirSync(imagesDir);
    const fileInfo = files.map(file => {
      const filePath = path.join(imagesDir, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: `${(stats.size / 1024 / 1024).toFixed(2)} MB`,
        exists: true
      };
    });
    
    res.status(200).json({
      directory: imagesDir,
      exists: true,
      files: fileInfo
    });
  } catch (error) {
    res.status(500).json({
      directory: imagesDir,
      exists: false,
      error: String(error)
    });
  }
}
