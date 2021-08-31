'use strict';

/**
 * Рисует елочку высотой height, если аргумент можно представить в виде целочисленного значения
 * @function tree
 * @param {string|number} - высота елочки
 * @returns {(string|null)} - елочка|null
 */
const tree = height => {
  if (!Number.isInteger(+height)) {
    return null;
  }
  
  if (height < 3) {
    return null;
  }
  
  let res = '';
  for (let i = 0; i < height - 1; i++) {
    const stars = ('*').repeat(2 * i + 1);
    const spaces = (' ').repeat(height - 2 - i);
    res += spaces + stars + spaces;
    res += '\n';
  }
  
  res += (' ').repeat(height - 2) + '|' + (' ').repeat(height - 2);
  res += '\n';
  
  return res;
}
