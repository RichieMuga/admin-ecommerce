"use client";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { OrderColumn, columns } from "./columns";
import { DataTable } from '@/components/ui/data-table';

const OrderClient = ({
  data
}:{
  data: OrderColumn[]
}) => {
  const router =useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading title={`Orders(${data.length})`} description="Manage orders for your store"/>
      </div>
      <Separator/>
      <DataTable searchKey="products" columns={columns} data={data}/>
    </>
  );
};

export default OrderClient;
