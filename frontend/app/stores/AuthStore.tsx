import { create } from "zustand";
import Cookies from 'js-cookie';

interface AuthState {
  email: string | null;
  isAuth: boolean;
  login: (email: string, hash: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  email: Cookies.get('user_email') || null,
  isAuth: !!Cookies.get('user_session'),
  
  login: (email, hash) => {
    Cookies.set('user_email', email, { expires: 1 });
    Cookies.set('user_session', hash, { expires: 1 });
    set({ email, isAuth: true });
  },
  
  logout: () => {
    Cookies.remove('user_email');
    Cookies.remove('user_session');
    set({ email: null, isAuth: false });
  }
}));