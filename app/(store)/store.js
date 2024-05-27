import {create} from 'zustand'

const useStore = create((set) => ({
  isMobile: false,
  isTablet: false,
  shouldFetch: false,
  currentPaggiBlog: 1,
  setShouldFetch: (data) => {
    set((state) => {
      return {
        ...state,
        shouldFetch: data,
      }
    })
  },
  setCurrentPaggiBlog: (data) => {
    set((state) => {
      return {
        ...state,
        currentPaggiBlog: data,
      }
    })
  },
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
