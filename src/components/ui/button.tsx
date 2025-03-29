export function Button({ onClick, children, className }: any) {
  return <button onClick={onClick} className={className}>{children}</button>;
}
