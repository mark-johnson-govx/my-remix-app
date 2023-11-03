import { unstable_vitePlugin as remix } from "@remix-run/dev";

export default remix({
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route("/", "routes/Home.tsx", () => {
        route("", "routes/SomeData.tsx", { index: true });
      });
      route("sales", "routes/Sales/Layout.tsx", () => {
        route("", "routes/Sales/Index.tsx", { index: true });
        route("invoices", "routes/Sales/Invoices.tsx", () => {
          route(":id", "routes/Sales/InvoiceDetail.tsx");
        });
      });
    });
  },
});
