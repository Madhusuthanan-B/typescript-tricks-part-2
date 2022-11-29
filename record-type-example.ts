// type ColorCodeMapper = {
//   [name: string]: string;
// };

type LightColors = 'Pale Pink' | 'Pewter Blue';

type ColorCodeMapper = Record<LightColors, string>;

const colorCodeMapper: ColorCodeMapper = {
  'Pewter Blue': '#88A0A8',
  'Dark Purple': '#290628',
  'Pale Pink': '#FAD4D8',
};
