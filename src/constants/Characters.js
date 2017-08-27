import CommonTechniques from './Techniques';

const Characters = [
  {name: 'Fox'},
  {name: 'Sheik'},
  {name: 'Marth'},
  {name: 'Kirby'},
  {name: 'Luigi'}
];

for (var i = 0; i < Characters.length; i++) {
  let techniquesCopy = JSON.parse(JSON.stringify(CommonTechniques));
  Characters[i].techniques = techniquesCopy;
}

export default Characters;
