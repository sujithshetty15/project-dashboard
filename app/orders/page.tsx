"use client"
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row})=>{
      return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg",{
        "bg-red-200":row.getValue("status")==="Pending",
        "bg-orange-200":row.getValue("status")==="Processing",
        "bg-green-200":row.getValue("status")==="Completed"
      })}> {row.getValue("status")}
      </div>
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  }
]



const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-09",
    method: "Credit Card"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-12",
    method: "PayPal"
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-24",
    method: "Google Pay"
  },
  {
    order: "ORD004",
    status: "Processing",
    lastOrder: "2023-04-14",
    method: "Cash"
  },
  {
    order: "ORD005",
    status: "Pending",
    lastOrder: "2023-05-28",
    method: "Aipay"
  },
  {
    order: "ORD006",
    status: "Completed",
    lastOrder: "2023-06-04",
    method: "Stripe"
  },
  {
    order: "ORD007",
    status: "Processing",
    lastOrder: "2023-07-21",
    method: "Weldo Pay"
  },
  {
    order: "ORD008",
    status: "Completed",
    lastOrder: "2023-08-23",
    method: "Bank Transfer"
  },
  {
    order: "ORD009",
    status: "Pending",
    lastOrder: "2023-09-11",
    method: "Apple Pay"
  },
  {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2023-10-07",
    method: "Cryptocurrency"
  },
  {
    order: "ORD011",
    status: "Completed",
    lastOrder: "2023-11-03",
    method: "Payoneer"
  },
  {
    order: "ORD012",
    status: "Processing",
    lastOrder: "2023-12-01",
    method: "Venmo"
  },

  // ...
]

export default function OrdersPage({ }: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Orders" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}


