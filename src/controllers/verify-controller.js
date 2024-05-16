import jwt from 'jsonwebtoken';
import { KEY } from '../config/config.js';


export const verifyToken = (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No se encontró el token' });
  }

  try {
    const tkn = jwt.decode(token);

    if (!tkn) {
      return res.status(401).json({ message: 'El Token no es valido' });
    }

    if (tkn.exp * 1000 < Date.now()) {
      return res.status(401).json({ message: 'El token expiró' });
    }

    jwt.verify(token, KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Token inválido' });
      }

      res.status(200).json({ message: 'Token válido', decoded: decoded });
    });
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }

    res.status(200).json({ message: 'Token válido' });
};
