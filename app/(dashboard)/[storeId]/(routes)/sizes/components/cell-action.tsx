"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Copy, Delete, Edit, MoreHorizontal } from "lucide-react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SizeColumn } from "./columns";
import { AlertModal } from "@/components/modals/alert-modal";

interface CellActionProps {
  data: SizeColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [open,setOpen]=useState(false)
  const [loading,setLoading]=useState(false)

  const router = useRouter();
  const params = useParams();

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success("Size copied to the clipboard!");
  };

  const onUpdate = () => {
    router.push(`/${params.storeId}/sizes/${data.id}`);
  };

  const onDelete = async () => {
    try {
      setLoading(false);
      await axios.delete(
        `/api/${params.storeId}/sizes/${data.id}`
      );
      toast.success("Sizes deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Make sure you remove all products using this size first.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <>
    <AlertModal isOpen={open} loading={loading} onClose={()=>setOpen(false)} onConfirm={onDelete}/>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-4 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onCopy(data.id)}>
            <Copy className="mr-4 h-4 w-4" />
            Copy Id
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onUpdate()}>
            <Edit className="mr-4 h-4 w-4" onClick={() => onUpdate()} />
            Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={()=>setOpen(true)}>
            <Delete className="mr-4 h-4 w-4  text-red" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
