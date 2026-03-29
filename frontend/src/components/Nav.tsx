import { Link, linkOptions } from "@tanstack/react-router";

const menus = linkOptions([
  {
    to: "/",
    label: "Dashboard",
    activeOptions: {
      exact: true,
    },
  },
  {
    to: "/categories",
    label: "Categories",
  },
  {
    to: "/products",
    label: "Products",
  },
  {
    to: "/orders",
    label: "Orders",
  },
  {
    to: "/users",
    label: "Users",
  },
]);

const Nav = () => {
  return (
    <ul className="mt-5 px-5">
      {menus.map((menu) => (
        <li key={menu.to}>
          <Link
            {...menu}
            activeProps={{
              className: `bg-[#4880FF] rounded-sm px-3 text-white`,
            }}
            to={menu.to}
            className="block py-4 px-3"
          >
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
