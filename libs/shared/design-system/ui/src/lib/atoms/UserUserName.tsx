export type UserUserNameProps = {
  userName: string;
};

export function UserUserName({ userName }: UserUserNameProps) {
  return <span className="f6 fw4 black-60">@{userName}</span>;
}
