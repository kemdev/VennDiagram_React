import { create } from 'zustand'

import { setsProps } from '@/types/vennChart'
import { vennSetsDefault } from '@/constants/setsDefaults'

interface VennSetsProps {
  vennSets: setsProps[],
  // setVennSets: (e: setsProps[]) => void
  setVennSets: (newVennSets: setsProps[]) => void
}

export const useVennSetsStore = create<VennSetsProps>()(
  (set) => ({
    vennSets: vennSetsDefault,

    setVennSets: (newVennSets: setsProps[]) => set(() => ({
      vennSets: newVennSets
    }))
  })

)