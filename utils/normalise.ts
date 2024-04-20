interface NormalisedData<T> {
  [key: string]: T;
}

export function normalise<T extends { [key: string]: unknown }>(
  data: T[],
  fields: (keyof T)[]
): NormalisedData<T> {
  const normalizedData: NormalisedData<T> = {};

  for (const item of data) {
    const keys = fields.map(field =>
      String(item[field])
        .toLowerCase()
        .replace(/[^a-zA-Z]/g, "")
    );
    const key = keys.join(":");
    normalizedData[key] = item;
  }

  return normalizedData;
}
