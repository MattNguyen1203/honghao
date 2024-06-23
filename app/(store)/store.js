import { create } from 'zustand'

const useStore = create((set) => ({
  isMobile: false,
  isTablet: false,
  openbookNow: null,
  setOpenBooknow: (data) => {
    set((state) => {
      return {
        ...state,
        openbookNow: data,
      }
    })
  },
  currentCategories: '',
  setCurrentCategories: (data) => {
    set((state) => {
      return {
        ...state,
        currentCategories: data,
      }
    })
  },

  shouldFetch: false,
  setShouldFetch: (data) => {
    set((state) => {
      return {
        ...state,
        shouldFetch: data,
      }
    })
  },
  currentPaggiBlog: 1,
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
