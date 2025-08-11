import { PROFILE } from "../data/profile-data";

export const SidebarProfile = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#0c121d]  rounded-3xl p-2 flex items-center justify-between space-x-2 mt-2 mb-6">
      <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
      <div>
        <p className="font-bold text-lg dark:text-[#88939b]">{PROFILE.name}</p>
        <p className="text-gray-600 font-medium text-xs dark:text-[#88939b]">
          {PROFILE.email}
        </p>
      </div>
      <div>
        <a href="">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
