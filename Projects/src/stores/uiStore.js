import { createStore } from 'zustand'

export const uiStore = createStore((set, get) => {
  return {
    HeaderHeight: 80,
    setHeaderHeight: (height) => set({ HeaderHeight: height }),
  }
})