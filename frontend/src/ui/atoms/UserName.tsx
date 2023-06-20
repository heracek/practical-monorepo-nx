export type UserNameProps = {
  name: string;
};

export function UserName({ name }: UserNameProps) {
  return <span className="black-90 f5 fw6 lh-title mv0">{name}</span>;
}
