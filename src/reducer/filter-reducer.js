export const filterReducer = (filterState, action) => {
  const initialFilterState = {
    sortBy: "",
    labels: [],
    priority: "",
  };

  switch (action.type) {
    case "SORTBY":
      return { ...filterState, sortBy: action.payload };
    case "PRIORITY":
      return { ...filterState, priority: action.payload };
    case "LABEL":
      const { labels } = filterState;
      return labels.includes(action.payload)
        ? {
            ...filterState,
            labels: labels.filter((label) => label !== action.payload),
          }
        : { ...filterState, labels: [...labels, action.payload] };
    case "CLEAR":
      return initialFilterState;
    default:
      return filterState;
  }
};
