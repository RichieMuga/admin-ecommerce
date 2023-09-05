"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { BillboardColumn, columns } from "./columns";
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from "@/components/ui/api-list";

const BillboardClient = ({
  data
}:{
  data: BillboardColumn[]
}) => {
  const router =useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading title={`Billbaords(${data.length})`} description="Manage billboards for your store"/>
        <Button onClick={()=>router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator/>
      <DataTable searchKey="label" columns={columns} data={data}/>
      <Separator/>
      <Heading title="API" description="Api calls for billboards"/>
      <Separator/>
      <ApiList entityName="billboards" entityIdName="billboardId" />
    </>
  );
};

export default BillboardClient;
