import React from "react";
import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
  Links,
  Meta,
  Scripts,
  useLoaderData,
  useNavigation,
  useRouteError,
} from "@remix-run/react";

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div className="bg-red-50 flex items-center justify-center p-6 h-full text-center">
      <div>
        <div className="flex justify-center mb-3 fill-red-300">
          <svg
            width="100px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 295.996 295.996"
          >
            <g>
              <path
                d="M147.998,0C66.392,0,0,66.392,0,147.998c0,81.606,66.392,147.998,147.998,147.998c81.606,0,147.998-66.392,147.998-147.998
		C295.996,66.392,229.604,0,147.998,0z M147.998,279.996c-36.257,0-69.143-14.696-93.023-38.44
		c-9.536-9.482-17.631-20.41-23.934-32.42C21.442,190.847,16,170.047,16,147.998C16,75.214,75.214,16,147.998,16
		c34.523,0,65.987,13.328,89.533,35.102c12.208,11.288,22.289,24.844,29.558,39.996c8.27,17.239,12.907,36.538,12.907,56.9
		C279.996,220.782,220.782,279.996,147.998,279.996z"
              />
              <path
                d="M163.638,187.607c17.554,3.671,33.322,13.54,44.4,27.789l12.631-9.82c-13.402-17.24-32.494-29.184-53.756-33.631
		c-34.195-7.146-70.146,6.052-91.587,33.631l12.633,9.82C105.675,192.607,135.382,181.697,163.638,187.607z"
              />
              <circle cx="98.666" cy="114.998" r="16" />
              <circle cx="197.666" cy="114.998" r="16" />
            </g>
          </svg>
        </div>
        <div className="text-3xl font-bold mb-2 text-gray-700">
          Something went wrong
        </div>
        <p className="text-gray-500 font-medium">
          We're already working on a fix!
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }: LoaderFunctionArgs) {
  const invoiceList = [
    {
      id: 1,
      invoiceNumber: "INV-0001",
      customerName: "John Doe",
      invoiceDate: "2021-01-01",
      dueDate: "2021-01-15",
      amount: 100.0,
      status: "paid",
    },
    {
      id: 2,
      invoiceNumber: "INV-0002",
      customerName: "Jane Doe",
      invoiceDate: "2021-01-01",
      dueDate: "2021-01-15",
      amount: 200.0,
      status: "paid",
    },
    {
      id: 3,
      invoiceNumber: "INV-0003",
      customerName: "Steve Smith",
      invoiceDate: "2021-01-01",
      dueDate: "2021-01-15",
      amount: 300.0,
      status: "paid",
    },
    {
      id: 4,
      invoiceNumber: "INV-0004",
      customerName: "Sophe Smith",
      invoiceDate: "2021-01-01",
      dueDate: "2021-01-15",
      amount: 400.0,
      status: "paid",
    },
  ];

  await new Promise((resolve) => setTimeout(resolve, 500));

  const invoice = invoiceList.find(
    (invoice) => invoice.id === Number(params.id)
  );
  return json({ invoice });
}

function InvoiceDetail() {
  const { invoice } = useLoaderData<typeof loader>() || {};
  const navigation = useNavigation();
  const loadingInvoice = navigation.state === "loading";

  //   if (loadingInvoice) {
  //     return (
  //       <div className="flex justify-center items-center h-full ">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  //       </div>
  //     );
  //   }

  return (
    <div
      className={`p-6 transition  ${
        loadingInvoice ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="font-bold">{invoice?.customerName}</div>
      <div className="font-bold text-2xl">${invoice?.amount}</div>
      <div>{invoice?.status}</div>
    </div>
  );
}

export default InvoiceDetail;
