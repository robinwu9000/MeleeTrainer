import CommonTechniques from './Techniques';

const Characters = [
  {name: 'Fox'},
  {name: 'Sheik'},
  {name: 'Marth'},
  {name: 'Kirby'},
  {name: 'Luigi'}
];

for (var i = 0; i < Characters.length; i++) {
  Characters[i].techniques = CommonTechniques.slice();
}

export default Characters;
