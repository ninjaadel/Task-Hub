export function TaskProgressBar({
  statusCount,
  progressColor,
}: {
  statusCount: number;
  progressColor?: string;
}) {
  console.log("TaskProgressBar - statusCount:", statusCount);
  console.log("TaskProgressBar - progressColor:", progressColor);

  return (
    <div className="my-2 ">
      <div className="w-[80%] mx-auto bg-gray-300 rounded-full relative">
        <div
          className="h-10 rounded-full overflow-hidden"
          style={{
            width: `${statusCount}%`,
            background: progressColor || "#3b82f6",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center text-md font-semibold text-black">
          {statusCount}%
        </div>
      </div>
    </div>
  );
}
