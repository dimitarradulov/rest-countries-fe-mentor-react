import { Region } from "../models/country.model";

type QueryCountriesFormProps = {
  query: string;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const QueryCountriesForm = ({
  query,
  onQueryChange,
  onRegionChange,
}: QueryCountriesFormProps) => {
  return (
    <form className="my-10">
      <div className="flex justify-between flex-wrap">
        <div className="relative basis-[35rem] flex-grow lg:flex-grow-0 mb-4 lg:m-0">
          <input
            name="query"
            type="text"
            placeholder="Search for a country..."
            className="shadow-md py-4 pr-8 pl-12 rounded placeholder:text-sm w-full dark:bg-dark-mode-blue placeholder:dark:text-light-mode-off-white"
            value={query}
            onInput={onQueryChange}
          />
        </div>

        <select
          name="region"
          className="text-sm py-4 pl-4 pr-8 border-r-[1rem] border-solid border-transparent shadow-md rounded flex-grow lg:flex-grow-0 dark:bg-dark-mode-blue cursor-pointer"
          onChange={onRegionChange}
        >
          <option value={Region.ALL}>Filter by Region</option>
          <option value={Region.AFRICA}>Africa</option>
          <option value={Region.AMERICA}>America</option>
          <option value={Region.ASIA}>Asia</option>
          <option value={Region.EUROPE}>Europe</option>
          <option value={Region.OCEANIA}>Oceania</option>
        </select>
      </div>
    </form>
  );
};

export default QueryCountriesForm;
