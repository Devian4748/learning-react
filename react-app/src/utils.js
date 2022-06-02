export const MakeClassNames = (classes, bfClassNames) => {
  return bfClassNames
    .split(' ')
    .map(bfClassName => classes[bfClassName])
    .join(' ');
};
