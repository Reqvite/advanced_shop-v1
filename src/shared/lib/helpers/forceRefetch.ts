export const forceRefetch = ({
  currentArg,
  previousArg
}: {
  currentArg: unknown;
  previousArg: unknown;
}) => {
  return currentArg !== previousArg;
};
