"use client"
import { DataTable } from '@/components/DataTable';
import PageTitle from '@/components/PageTitle'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'

type Props = {}

type Payment = {
    company: string;
    ceo: string;
    profit: string | number;
  };
  
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "company",
      header: "Company",
      cell: ({ row }) => {
        return (
          <div className='flex gap-2 items-center'>
            <img
              className="h-10 w-10"
              src={`https://api.dicebear.com/7.x/icons/svg?seed=${row.getValue("company"
              )}`}
              alt="user-image"
            />
            <p>{row.getValue("company")}</p>
          </div>
        );
      }
    },
    {
      accessorKey: "ceo",
      header: "Ceo",
    },
    {
      accessorKey: "profit",
      header: "Profit",
    }
  ]
  
  
  
  const data: Payment[] = [
    {
      company:"Duolingo",
      ceo:"Raman",
      profit:"+50%"
    },
    {
        company:"Coursera",
        ceo:"Khan",
        profit:"+40%"
    },
    {
        company:"Quizlet",
        ceo:"Henry",
        profit:"+70%"
    },
    {
        company:"Photomath",
        ceo:"John",
        profit:"+60%"
    },
    {
        company:"Mesmerize",
        ceo:"Kim Jo",
        profit:"+55%"
    },
    {
        company:"Codecademy",
        ceo:"Jammy",
        profit:"+78%"
    },
  
    // ...
  ]

export default function SponsersPage({}: Props) {
  return (
    <div className='flex flex-col gap-5 w-full'>
        <PageTitle title="Sponsers"/>
        <DataTable columns={columns} data={data} />
    </div>
  )
}