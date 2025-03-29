export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border p-4 rounded-lg">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
