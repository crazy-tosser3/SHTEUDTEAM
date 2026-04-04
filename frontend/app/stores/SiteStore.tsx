import { create } from "zustand";

const useSiteStore = create((set) => ({
  modalIsVisible: false,
  modalContent: {
    head: "Принять?",
    text: "",
    subText: "",
    btn1Title: "Да",
    btn2Title: "Нет"
  },

  setModalVisibility: (val:boolean) => {
    set((state:any) => ({...state, modalIsVisible: val}))
  },

  setModalInfo: (head:string, text:string, subText:string, btn1Title:string, btn2Title:string) => {
    set((state:any) => ({...state, modalContent: {head, text, subText, btn1Title, btn2Title}}))
  }
}))

export default useSiteStore;