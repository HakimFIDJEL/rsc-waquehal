import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Galerie",
  description: "Modifier une image de la galerie",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
