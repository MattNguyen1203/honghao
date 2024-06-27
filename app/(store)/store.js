import { create } from 'zustand'

const useStore = create((set) => ({
  isMobile: false,
  isTablet: false,

  // mở homeForm ở activity
  openbookNow: null,
  setOpenBooknow: (data) => {
    set((state) => {
      return {
        ...state,
        openbookNow: data,
      }
    })
  },

  // khi mở formHome sẽ ẩn nav
  checkOpenBookNow: false,
  setCheckOpenBookNow: (data) => {
    set((state) => {
      return {
        ...state,
        checkOpenBookNow: data,
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
