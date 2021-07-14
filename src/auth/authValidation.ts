/* import { Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import { SECRET } from './SECRET';

export function verifyJWT(req:Request, res:Response, next:NextFunction){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
} */