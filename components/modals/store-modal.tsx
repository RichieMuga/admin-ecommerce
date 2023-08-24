"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal";

export default function StoreModal() {
   const storeModal = useStoreModal();

  return (
    <Modal title="Store Modal" description="this is a store modal" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
        Future store modal
    </Modal>
  )
}
