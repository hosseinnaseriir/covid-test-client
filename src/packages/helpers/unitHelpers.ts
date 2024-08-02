
export namespace unitHelpers {
  const remConvertor = (value: number): string => {
    return `${(value / 16).toFixed(3)}rem`;
  };

  export const rem = (string: string | number): string => {
    if (typeof (+string) === "number") {
      return remConvertor(+string);
    }

    return (string + '').replace(/(\d+)px/g, (substring, arg) => {
      return remConvertor(parseInt(arg));
    });
  };
}
