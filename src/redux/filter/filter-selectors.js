export const getFilter = ({ contacts, filter }) => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return result;
  };
