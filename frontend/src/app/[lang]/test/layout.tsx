export default function layout({
  params,
  children,
  searchParams
}: {
  children: React.ReactNode;
  params: {
    slug: string;
  };
  searchParams: {
    slug: string;
  }
}) {
  
  return (
    <div>{children}</div>
  )
}
export async function generateStaticParams() {
  return [];
}
