import { AppShell } from "@/components/shell/app-shell";
import { EmptyHero } from "@/components/shell/empty-hero";

type HomeSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

type HomeProps = {
  searchParams?: HomeSearchParams;
};

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = searchParams ? await searchParams : {};
  const lat = firstParam(params.lat);
  const lon = firstParam(params.lon);
  const name = firstParam(params.name);
  const hasActiveLocation = Boolean(lat || lon || name);

  return (
    <AppShell>
      <EmptyHero hasActiveLocation={hasActiveLocation} locationName={name} />
    </AppShell>
  );
}
