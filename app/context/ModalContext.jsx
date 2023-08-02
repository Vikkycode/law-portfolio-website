'use client'
import React,{createContext,useState} from 'react'
const ModalContext = createContext();



const ModalProvider = ({children})=>{
    const [isModalOpen,setIsModalOpen] = useState(false)

    const toggleModal = ()=>{
        setIsModalOpen((prevState)=> !prevState)
    }
    return (
        <ModalContext.Provider value={{isModalOpen,toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext,ModalProvider}
