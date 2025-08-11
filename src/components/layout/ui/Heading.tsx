interface Props {
  children: React.ReactNode;
}

export function Heading({ children }: Props) {
  return <h1 className="text-3xl font-medium ">{children}</h1>;
}
