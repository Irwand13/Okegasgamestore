  import { createContext, useContext, useEffect, useState } from 'react';
  import { supabase, Profile } from '../lib/supabase';
  import { User } from '@supabase/supabase-js';
  import toast from 'react-hot-toast';

  type AuthContextType = {
    user: User | null;
    profile: Profile | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
    register: (email: string, password: string, username: string, fullName: string) => Promise<{ success: boolean; error?: string }>;
    logout: () => Promise<void>;
    updateProfile: (data: Partial<Profile>) => Promise<{ success: boolean; error?: string }>;
  };

  const AuthContext = createContext<AuthContextType | undefined>(undefined);

  export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Check active session
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          fetchProfile(session.user.id);
        }
        setLoading(false);
      });

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
        }
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    }, []);

    async function fetchProfile(userId: string) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (!error && data) {
        setProfile(data);
      }
    }

    async function login(email: string, password: string) {
      try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success('Login berhasil!');
        return { success: true };
      } catch (error: any) {
        toast.error(error.message || 'Login gagal');
        return { success: false, error: error.message };
      }
    }

    async function register(email: string, password: string, username: string, fullName: string) {
      try {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
              full_name: fullName,
            },
          },
        });
        if (error) throw error;
        toast.success('Registrasi berhasil! Silakan login.');
        return { success: true };
      } catch (error: any) {
        toast.error(error.message || 'Registrasi gagal');
        return { success: false, error: error.message };
      }
    }

    async function logout() {
      await supabase.auth.signOut();
      toast.success('Logout berhasil');
    }

    async function updateProfile(data: Partial<Profile>) {
      if (!user) return { success: false, error: 'Not authenticated' };
      
      try {
        const { error } = await supabase
          .from('profiles')
          .update(data)
          .eq('id', user.id);
        
        if (error) throw error;
        
        // Refresh profile
        await fetchProfile(user.id);
        toast.success('Profil berhasil diupdate');
        return { success: true };
      } catch (error: any) {
        toast.error(error.message || 'Update gagal');
        return { success: false, error: error.message };
      }
    }

    return (
      <AuthContext.Provider value={{
        user,
        profile,
        loading,
        login,
        register,
        logout,
        updateProfile,
      }}>
        {children}
      </AuthContext.Provider>
    );
  }

  export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
  }