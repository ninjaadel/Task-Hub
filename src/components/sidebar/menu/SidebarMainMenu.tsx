import { MENUITEM } from "../data/menu-data";
import Link from "next/link";

export const SidebarMenu = () => {
  return (
    <div className=" p-3">
      <ul className="space-y-1  ">
        {MENUITEM.map((item) => (
          <li
            key={item.id}
            className=" items-center  text-gray-900 hover:bg-indigo-700 dark:hover:bg-[#6232ed] hover:text-white dark:text-[#faf8fe] rounded-full p-2 "
          >
            <Link href={item.href} className="flex items-center space-x-1 ">
              <span>{item.icon}</span>
              <p className="">{item.title}</p>
              {item.title === "Messages" && (
                <span className="bg-indigo-700 text-white rounded-full px-2 py-1 text-xs ml-auto inline-flex items-center">
                  4
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
