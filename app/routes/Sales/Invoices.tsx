import React, { useState } from "react";
import { json } from "@remix-run/node";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "@remix-run/react";

export const loader = async () => {
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
  return json({ invoices: invoiceList });
};

const Invoices = () => {
  const navigation = useNavigation();
  const params = useParams();
  const { invoices } = useLoaderData<typeof loader>();
  const [clickedInvoiceId, setClickedInvoiceId] = useState(null);

  const invoiceIsActive = (invoiceId: number) => {
    return (
      (Number(params.id) === invoiceId && clickedInvoiceId === invoiceId) ||
      (navigation.state === "loading" && clickedInvoiceId === invoiceId)
    );
  };

  return (
    <div>
      <h4 className="uppercase text-lg text-gray-500 font-medium mb-3">
        Invoice List
      </h4>
      <div>
        <div className="rounded-lg overflow-hidden border border-gray-200 flex">
          <div className="w-1/2 border-r border-gray-200">
            {invoices.map((invoice: any) => (
              <Link
                to={`/sales/invoices/${invoice.id}`}
                prefetch="intent"
                preventScrollReset
                key={invoice.id}
                className={`flex w-full justify-between px-6 py-3 transition ${
                  invoiceIsActive(invoice.id)
                    ? "bg-blue-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setClickedInvoiceId(invoice.id)}
              >
                <div>
                  <div
                    className={`${
                      invoiceIsActive(invoice.id)
                        ? "text-white"
                        : "text-gray-500"
                    } transition font-medium`}
                  >
                    {invoice.customerName}
                  </div>
                  <div
                    className={`${
                      invoiceIsActive(invoice.id)
                        ? "text-white"
                        : "text-gray-600"
                    } transition`}
                  >
                    {invoice.invoiceNumber}
                  </div>
                </div>
                <div
                  className={`${
                    invoiceIsActive(invoice.id) ? "text-white" : "text-gray-600"
                  } transition font-bold`}
                >
                  ${invoice.amount}
                </div>
              </Link>
            ))}
          </div>
          <div className="w-1/2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
