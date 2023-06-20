import jwt from 'jsonwebtoken';

export function createToken(content) {
  return jwt.sign(content, process.env.JWT_SECRET);
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
