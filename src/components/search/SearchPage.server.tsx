import {Heading, Input, PageHeader} from '~/components';
import {Layout} from '~/components/index.server';

export function SearchPage({
  searchTerm,
  children,
  ...serverProps
}: {
  searchTerm?: string | null;
  children: React.ReactNode;
}) {
  return (
    <Layout {...serverProps}>
      <PageHeader>
        <Heading as="h1" size="copy">
          Search
        </Heading>
        <form className="relative flex w-full text-heading">
          <Input
            defaultValue={searchTerm}
            placeholder="Search…"
            type="search"
            variant="search"
            name="q"
          />
          <button className="absolute right-0 py-2" type="submit">
            Go
          </button>
        </form>
      </PageHeader>
      {children}
    </Layout>
  );
}
