import { create } from 'zustand';

interface LoadingProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingProps>((set) => ({
  loading: false,

  setLoading: (loading: boolean) => set(() => ({ loading })),
}));