import { Router } from 'express';
import { verifyUser } from '../controllers/login-controller.js';
import { verifyToken } from '../controllers/verify-controller.js';

const router = Router();

router.post('/login', verifyUser);
router.get('/verify', verifyToken);

export default router;
