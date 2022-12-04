function doMagic(value: unknown) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (typeof value === 'number') {
    console.log(value + 10);
  } else {
    const printer = <Print>value;
    if (printer && typeof printer === 'object') {
      printer.print();
    }
  }
}

doMagic(10);
doMagic('hello');
doMagic({
  print: () => {
    console.log('printing');
  },
});

type Print = {
  print: () => void;
};
