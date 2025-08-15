import {
  Image,
  Link,
  MessageSquareMore,
  Pencil,
  PenLine,
  Plane,
  Plus,
} from "lucide-react";
import type { ITaskCard } from "../type/task-card-type";
import user1photo from "../userPhotos/user1.jpg";
import user2photo from "../userPhotos/user2.jpg";
import user3photo from "../userPhotos/user3.jpg";

export const LAST_TASKS: ITaskCard[] = [
  {
    id: 1,
    title: "Travel App User Flow",
    due: "5 days",
    image: [user1photo, user2photo, user3photo],
    Plane: Plane,
    MessageSquareMore: MessageSquareMore,
    imageIcon: Image,
    Link: Link,
    Plus: Plus,
    PenLine: Pencil,
    statusCount: 50,
    progressColor:
      "repeating-linear-gradient(45deg, #8b5cf6 0px, #8b5cf6 10px, #a855f7 10px, #a855f7 20px)",
  },
  {
    id: 2,
    title: "Travel App User Flow",
    due: "2023-10-02",
    image: [user1photo, user2photo, user3photo],
    Plane: Plane,
    MessageSquareMore: MessageSquareMore,
    imageIcon: Image,
    Link: Link,
    Plus: Plus,
    PenLine: Pencil,
    statusCount: 100,
    progressColor:
      "repeating-linear-gradient(45deg, #06b6d4 0px, #06b6d4 10px, #67e8f9 10px, #67e8f9 20px)",
  },
  {
    id: 3,
    title: "Travel App User Flow",
    due: "2023-10-03",
    image: [user1photo, user2photo, user3photo],
    Plane: Plane,
    MessageSquareMore: MessageSquareMore,
    imageIcon: Image,
    Link: Link,
    Plus: Plus,
    PenLine: Pencil,
    statusCount: 80,
    progressColor:
      "repeating-linear-gradient(45deg, #eab308 0px, #eab308 10px, #fde047 10px, #fde047 20px)",
  },
];
