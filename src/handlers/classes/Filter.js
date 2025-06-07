import { searchMoviesByFilter } from "../../api/searchMoviesByFilter";
import { setIsFilter, setIsSearch, setFilter } from "../../emitters/emitters";
import { parseDate } from "../../utils/dates";
import { parseSort } from "../../utils/parseSort";

export class Filter {
  #filters = {
    page: 1,
    limit: 20,
    keyword: "",
    sort: { by: "release_date", order: "desc" },
    startYear: "01/01/2000",
    endYear: new Date().toLocaleDateString("pt-BR"),
    language: "en",
    rating: "5",
    avaliation: "1200",
    genres: [],
    adult: false,
  };

  #isFilter = false;
  #isPagination = false;

  onFilterForm = ({ source, event }) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    this.#updateFilter(values);
    this.#emitFilter(values);
    this.#fetch();
  };

  onSetIsFilter = ({ value }) => {
    this.#isFilter = value;
  };

  onSetFilter = ({ values }) => {
    const parsedValues = {
      keyword: values.keyword || "",
      sort: parseSort(values.sort),
      startYear: parseDate(values.startYear),
      endYear: parseDate(values.endYear),
      language: values.language || "",
      rating: values.rating || "0",
      avaliation: values.avaliation || "0",
      adult: !!values.adult,
    };

    this.#updateFilter(parsedValues);
    this.#fetch();
  };

  #updateFilter = (newValues) => {
    this.#filters = {
      ...this.#filters,
      ...newValues,
      page: 1,
    };
    this.#isFilter = true;
  };

  #emitFilter = (values) => {
    setIsFilter({ payload: { value: true } });
    setIsSearch({ payload: { value: false } });
    setFilter({ payload: { values } });
  };

  #fetch = () => {
    searchMoviesByFilter(this.#filters);
  };

  get filters() {
    return this.#filters;
  }

  get isFilter() {
    return this.#isFilter;
  }

  get page() {
    return this.#filters.page;
  }

  set page(value) {
    this.#filters.page = value;
    this.#fetch();
  }

  get pageLimit() {
    return this.#filters.limit;
  }

  get isPagination() {
    return this.#isPagination;
  }

  set isPagination(value) {
    this.#isPagination = value;
  }
}
