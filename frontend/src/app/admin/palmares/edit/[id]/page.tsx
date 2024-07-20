import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Palmarès",
  description: "Modifier un trophée",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
