"use client";

import {useState} from "react"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"
import { toast } from "react-hot-toast";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import {
  Form,
  FormLabel,
  FormControl,
  FormItem,
  FormField,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1),
});

export default function StoreModal() {
  const [loading,setLoading] = useState(false)

  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name:""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      setLoading(true)

      const response =await axios.post("/api/stores",values)

      console.log(response.data);
      toast.success("store created!")
    }
    catch{
      toast.error("Something went wrong")
    }
    finally{

    }
  };
  return (
    <Modal
      title="Store Modal"
      description="this is a store modal"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Ecommerce" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div className="flex justify-end pt-6 space-x-2 items-center w-full">
                  <Button disabled={loading} variant="outline" onClick={storeModal.onClose}>Cancel</Button>
                  <Button disabled={loading} type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
}
