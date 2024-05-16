import jwt from 'jsonwebtoken';
import { EXPIRATION, KEY } from '../config/config.js';


const users = [
  {
    email: 'usuario@gmail.com',
    password: 'prueba123'
  }
];

export const verifyUser = (req, res) => {
    
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
  
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ email: user.email }, KEY, { expiresIn: EXPIRATION });
        res.json({ token });
      } else{
        res.status(403).json({ message: 'Las credenciales son incorrectas' });
      }
    } else {
      res.status(403).json({ message: 'No existe el Usuario' });
    }
  }