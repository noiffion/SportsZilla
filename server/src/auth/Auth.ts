import { Request, Response } from 'express';
import { MiddlewareFn } from 'type-graphql';
import { verify } from 'jsonwebtoken';

export interface AuthContext {
  req: Request;
  res: Response;
  payload?: { userId: string };
}

const Auth: MiddlewareFn<AuthContext> = ({ context }, next) => {
  const authorization = context.req.get('Authorization');

  try {
    if (!authorization) throw new Error('Not authenticated');
    const token = authorization.split(' ')[1];
    const payload = verify(token, 'MySecretKey');
    console.log(payload);
    context.payload = payload as any;
  } catch (err) {
    console.error(err);
  }
  return next();
};

export default Auth;
