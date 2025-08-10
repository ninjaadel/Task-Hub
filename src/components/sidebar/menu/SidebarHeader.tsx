interface IProps {
  title: string;
}

export const SidebarHeader = ({ title }: IProps) => {
  return <h3 className="text-gray-400 mb-1">{title}</h3>;
};
