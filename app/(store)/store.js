import {create} from 'zustand'
const useStore = create((set) => ({
  isMobile: false,
  isTablet: false,
  setIsMobile: (data) => {
    set((state) => {
      return {
        ...state,
        isMobile: data,
      }
    })
  },

  setIsTablet: (data) => {
    set((state) => {
      return {
        ...state,
        isTablet: data,
      }
    })
  },
}))
export default useStore
