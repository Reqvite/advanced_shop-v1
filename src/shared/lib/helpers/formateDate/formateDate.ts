export const formateDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};
