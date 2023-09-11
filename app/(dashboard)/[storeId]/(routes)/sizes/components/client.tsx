"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from "@/components/ui/api-list";

const SizeClient = ({
  data
}:{
  data: SizeColumn[]
}) => {
  const router =useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading title={`Sizes(${data.length})`} description="Manage sizes for your products"/>
        <Button onClick={()=>router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator/>
      <DataTable searchKey="name" columns={columns} data={data}/>
      <Separator/>
      <Heading title="API" description="Api calls for sizes"/>
      <Separator/>
      <ApiList entityName="sizes" entityIdName="sizeId" />
    </>
  );
};

export default SizeClient;
