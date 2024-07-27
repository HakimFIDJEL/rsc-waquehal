import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Actualités",
  description: "Les actualités du club",
}

export default function Show({ params }: { params: { id: string } }) {
  return (
    <Client id={params.id} />
  )
}