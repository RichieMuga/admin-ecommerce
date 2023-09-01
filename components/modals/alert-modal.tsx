"use client"

import { useEffect,useState } from "react"
import { Button } from "../ui/button";
import { Modal } from '../ui/modal';

interface AlertModalProps{
    isOpen:boolean,
    onClose:()=>void,
    onConfirm:()=>void,
    loading:boolean
}

export const AlertModal:React.FC<AlertModalProps>=({
    isOpen,
    onClose,
    onConfirm,
    loading
})=>{
    const [isMounted, setisMounted] = useState(false)

    useEffect(() => {
      setisMounted(true)
    }, [])

    if(!isMounted){

    }

    return (
      <Modal
        title="Are you sure?"
        description="This action cannot be undone."
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button disabled={loading} variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={loading} variant="destructive" onClick={onConfirm}>
            Continue
          </Button>
        </div>
      </Modal>
    );

}
