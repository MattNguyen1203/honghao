import {create} from 'zustand'

const useStore = create((set) => ({
  isMobile: false,
  setIsMobile: (data) => {
    set((state) => {
      return {
        ...state,
        isMobile: data,
      }
    })
  },
}))

export default useStore
