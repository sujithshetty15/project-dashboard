"use client"
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}

type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className='flex gap-2 items-center'>
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email",
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
    name: "Henry Nicolls",
    email: "henry.nicolls@email.com",
    lastOrder: "2023-01-09",
    method: "Credit Card"
  },
  {
    name: "Jimmy Carter",
    email: "jimmy.carte@email.com",
    lastOrder: "2023-02-12",
    method: "PayPal"
  },
  {
    name: "Jammy Tom",
    email: "jammy.tom@email.com",
    lastOrder: "2023-03-24",
    method: "Google Pay"
  },
  {
    name: "Com Rhodes",
    email: "com.rhodes@email.com",
    lastOrder: "2023-04-14",
    method: "Cash"
  },
  {
    name: "Emma Lopez",
    email: "emma.lopez@email.com",
    lastOrder: "2023-05-28",
    method: "Aipay"
  },
  {
    name: "John Cardiff",
    email: "john.cardiff@email.com",
    lastOrder: "2023-06-04",
    method: "Stripe"
  },
  {
    name: "Eliza Gonzalez",
    email: "eliza.gonzalez@email.com",
    lastOrder: "2023-07-21",
    method: "Weldo Pay"
  },
  {
    name: "Seth Raman",
    email: "seth.raman@email.com",
    lastOrder: "2023-08-23",
    method: "Bank Transfer"
  },
  {
    name: "Mark Zongo",
    email: "mark.zongo@email.com",
    lastOrder: "2023-09-11",
    method: "Apple Pay"
  },
  {
    name: "Chang Zuo",
    email: "chang.zuo@email.com",
    lastOrder: "2023-10-07",
    method: "Cryptocurrency"
  },
  {
    name: "Heng Chaou",
    email: "heng.chaou@email.com",
    lastOrder: "2023-11-03",
    method: "Payoneer"
  },
  {
    name: "Sophia Wilson",
    email: "sophia.wilson@email.com",
    lastOrder: "2023-12-01",
    method: "Venmo"
  },

  // ...
]

export default function UsersPage({ }: Props) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}


