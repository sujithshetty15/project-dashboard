import BarChart from "@/components/BarChart";
import Card, { CardContent, CardProps } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { Activity, ActivityIcon, CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const cardData: CardProps[]=[
  {
    label:"Total Revenue",
    amount:"RS 40,000",
    description:"+20.1% from last month",
    icon:DollarSign
  },
  {
    label:"Subscriptions",
    amount:"+3000",
    description:"+120.1% from last month",
    icon:Users
  },
  {
    label:"Sales",
    amount:"+10,000",
    description:"+10.1% from last month",
    icon:CreditCard
  },
  {
    label:"Active Now",
    amount:"+450",
    description:"+20.1% from last month",
    icon:Activity
  }
];

const userSalesData:SalesProps[]=[
  {
    name:"Henry Nicolls",
    email:"henry.nicolls@email.com",
    saleAmount:"+$1,999.00"
  },
  {
    name:"Jimmy Carter",
    email:"jimmy.carte@email.com",
    saleAmount:"+$5,999.00"
  },
  {
    name:"Jammy Tom",
    email:"jammy.tom@email.com",
    saleAmount:"+$2,999.00"
  },
  {
    name:"Com Rhodes",
    email:"com.rhodes@email.com",
    saleAmount:"+$3,999.00"
  },
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard"/>
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d,i)=>(
          <Card key={i}
          amount={d.amount}
          description={d.description}
          icon={d.icon}
          label={d.label}
          />
        ))
        }
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 255 sales this month.
            </p>
          </section>
          {userSalesData.map((d,i)=>(
          <SalesCard
          key={i}
          email={d.email}
          name={d.name}
          saleAmount={d.saleAmount}
          />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
