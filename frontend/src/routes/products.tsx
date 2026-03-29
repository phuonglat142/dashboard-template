import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
