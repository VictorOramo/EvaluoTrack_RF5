export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });

export const convertFilesToBase64 = async (files: File[]): Promise<string[]> => {
  const arr = [];
  for (const f of files) {
    // optionally validate type/size
    arr.push(await fileToBase64(f));
  }
  return arr;
};
