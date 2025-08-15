import type { LucideProps } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { ForwardRefExoticComponent } from "react";

export type ITaskCard = {
  id: number;
  title: string;
  due: string | Date;
  image: StaticImageData[];
  Plane: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  MessageSquareMore: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  imageIcon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  Link: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  Plus: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  PenLine: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  statusCount: number;
  progressColor?: string; // Optional property for custom progress bar color
};
