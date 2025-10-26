import type { FrequencyMap } from "../types/FrequencyMap";
import type { Sort } from "../types/Sort";

export function filterAndSortFrequencyMap(
  frequencyMap: FrequencyMap,
  sort: Sort,
  searchWord?: string,
) {
  let mapEntries = [...frequencyMap.entries()];

  if (searchWord) {
    mapEntries = mapEntries.filter(([w, _]) => w.startsWith(searchWord));
  }

  return mapEntries.sort(([w1, f1], [w2, f2]) => {
    if (f1 === f2)
      return w1.localeCompare(w2);

    return sort === "ascending" ? f1 - f2 : f2 - f1;
  });
}
