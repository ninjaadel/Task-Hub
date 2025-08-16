import { CircleCheck } from "lucide-react";

export function TaskProgressBar({
  statusCount,
  progressColor,
}: {
  statusCount: number;
  progressColor?: string;
}) {
  const CompletedProgress = statusCount === 100;

  return (
    <div className="my-2 ">
      <div className="w-[90%] mx-auto bg-gray-300 rounded-full relative">
        <div
          className="h-13 rounded-full overflow-hidden my-5"
          style={{
            width: `${statusCount}%`,
            background: progressColor || "#3b82f6",
          }}
        ></div>
        {statusCount < 100 && (
          <div className="absolute inset-0 flex items-center justify-center text-md font-semibold text-black">
            {statusCount}%
          </div>
        )}
        {CompletedProgress && (
          <div className="absolute inset-0 flex items-center justify-center text-md font-semibold text-black">
            <span className="flex items-center justify-center gap-1">
              <CircleCheck
                size={24}
                className="text-black rounded-full bg-transparent"
              />{" "}
              Completed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
