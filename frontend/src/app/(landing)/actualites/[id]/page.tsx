import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Actualités",
  description: "Les actualités du club",
}

export default function Show({ id } : { id: string }) {
  return (
    <Client id={id} />
  )
}