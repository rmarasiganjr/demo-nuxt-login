import { Middleware } from '@nuxt/types';
import { Context } from '@nuxt/types/app';
import Cookies from 'js-cookie';

const authMiddleware: Middleware = ({ redirect }: Context) => {
  const authToken = Cookies.get('auth_token');

  if (!authToken) {
    return redirect('/login');
  }
};

export default authMiddleware;
