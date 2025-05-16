import { events } from "../constants/events";
import { setFilter, setIsFilter, setIsSearch } from "../emitters/emitSet";

export const filterHandlers = {
  [events.filterForm]: ({ source, event }) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());

    setIsFilter({ payload: { value: true } });
    setIsSearch({ payload: { value: false } });

    setFilter({ payload: { values } });
  },
};
