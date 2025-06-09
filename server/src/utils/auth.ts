import jwt from 'jsonwebtoken';
import { Request } from 'express';

const secret = process.env.JWT_SECRET || 'ItsaSecret';
const expiration = '2h';

export function signToken({ username, email, _id }: { username: string; email: string; _id: string }) {
  const payload = { username, email, _id };
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

export function authMiddleware({ req }: { req: Request }) {
  let token = req.body?.token || req.query?.token || req.headers.authorization;
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }
  if (!token) {
    return {};
  }
  try {
    const decoded = jwt.verify(token, secret) as any;
    if (typeof decoded === 'object' && decoded !== null && 'data' in decoded) {
      return { user: decoded.data };
    }
  } catch {
    console.log('Invalid token');
  }
  return {};
}