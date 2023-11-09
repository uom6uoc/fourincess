// eslint-disable-next-line @typescript-eslint/no-explicit-any
const allResolved = async (promises: Promise<any>[]) => {
  const resolvedPromises = await Promise.all(
    promises.map((promise) =>
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      promise.catch((_error) => {
        return null;
      })
    )
  );

  return resolvedPromises.filter((promise) => promise !== null);
};

export default { allResolved };
