import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Nome da imagem não fornecido' });
  }
  
  const imagePath = path.join(process.cwd(), 'public', 'images', 'sistema-solar', name);
  
  if (!fs.existsSync(imagePath)) {
    return res.status(404).json({ error: 'Imagem não encontrada', path: imagePath });
  }
  
  const imageBuffer = fs.readFileSync(imagePath);
  
  // Detectar tipo de imagem
  const ext = path.extname(name).toLowerCase();
  const contentType = ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
  
  res.setHeader('Content-Type', contentType);
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  res.send(imageBuffer);
}
