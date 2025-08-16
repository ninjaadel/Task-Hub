import NextLink from "next/link";
import Image from "next/image";
import type { ITaskCard } from "../type/task-card-type";
import { TaskProgressBar } from "./TaskProgressBar";

export function LastCard({
  title,
  due,
  id,
  image,
  Plane,
  MessageSquareMore,
  imageIcon: ImageIcon,
  Link: LinkIcon,
  Plus,
  PenLine,
  statusCount,
  progressColor,
}: ITaskCard) {
  return (
    <div className="p-3 rounded-2xl bg-white dark:bg-[#050910]   shadow-lg hover:shadow-xl transition-shadow duration-300 ">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Plane className="w-9 h-9 rounded-full p-2 bg-[#f8f5f2] dark:bg-[#0c0c27] text-[#9580e2]" />
        </div>
        <div className="col-span-5 gy-2">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-xs text-gray-500">{`Due: ${due}`}</p>
        </div>
        <div className="col-span-4">
          <div className="flex -space-x-2">
            {image.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${title} ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white relative"
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <TaskProgressBar
          statusCount={statusCount}
          progressColor={progressColor}
        />
      </div>
      <div className="mt-2 flex justify-between w-full">
        <div className=" flex justify-between items-center mt-2 w-1/2">
          <div className="flex items-center">
            <MessageSquareMore className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-800 mx-2">6</span>
          </div>
          <div className="flex items-center ">
            <ImageIcon className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-800 mx-2">3</span>
          </div>
          <div className="flex items-center">
            <LinkIcon className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-800 mx-2">1</span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Plus className="w-10 h-10 text-white rounded-full p-2 bg-[#715be9] ml-2" />
          <PenLine className="w-10 h-10 text-[#715be9] rounded-full p-2 border-1 border-[#715be9] ml-2" />
        </div>
      </div>
    </div>
  );
}
