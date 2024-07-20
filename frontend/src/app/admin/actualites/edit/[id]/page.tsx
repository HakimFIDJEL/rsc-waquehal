import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Actualités",
  description: "Modifier une actualité",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
