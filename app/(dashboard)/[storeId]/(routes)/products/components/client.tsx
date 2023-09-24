"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from '@/components/ui/data-table';
import { ApiList } from "@/components/ui/api-list";

const ProductClient = ({
  data
}:{
  data: ProductColumn[]
}) => {
  const router =useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading title={`Products(${data.length})`} description="Manage products for your store"/>
        <Button onClick={()=>router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator/>
      <DataTable searchKey="name" columns={columns} data={data}/>
      <Separator/>
      <Heading title="API" description="Api calls for products"/>
      <Separator/>
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};

export default ProductClient;
