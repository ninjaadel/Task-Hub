"use client";

import type { ITaskCard } from "../type/task-card-type";
import { LastCard } from "./LastCard";
import { LAST_TASKS } from "../data/last-tasks-data";

export function LastTasksList() {
  return (
    <div className="mt-2 m-1 mb-4">
      <h2 className="text-2xl font-semibold my-3">{`Last Tasks (${LAST_TASKS.length})`}</h2>
      <div className="grid grid-cols-3 gap-2">
        {LAST_TASKS.map((task) => (
          <LastCard
            key={task.id}
            {...task}
            progressColor={task.progressColor}
          />
        ))}
      </div>
    </div>
  );
}
