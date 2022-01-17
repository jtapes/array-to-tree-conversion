type ObjType = {
  id: string,
  parentId?: string,
  name: string
}

const data: ObjType[] = [
  { id: '1', parentId: '0', name: 'Moila' },
  { id: '122', name: 'Moila' },
  { id: '2', parentId: '1', name: 'Art' },
  { id: '3', parentId: '1', name: 'Best' },
  { id: '4', parentId: '1', name: 'Super' },
  { id: '5', parentId: '2', name: 'Puper' },
  { id: '6', parentId: '2', name: 'Jim' },
  { id: '7', parentId: '3', name: 'Clash' },
  { id: '8', parentId: '3', name: 'Ron' },
  { id: '9', parentId: '3', name: 'Smash' },
  { id: '10', parentId: '3', name: 'Moila' },
  { id: '11', parentId: '4', name: 'TTTGGG' },
  { id: '13', parentId: '4', name: 'ZZZZ' },
  { id: '17', parentId: '5', name: 'Moila' },
  { id: '100', parentId: '17', name: 'Zero' },
  { id: '44', parentId: '5', name: 'Zina' },
];

type treeObjType =  {
  children: ObjType[],
} & ObjType


function f(data: ObjType[]) {
  const newArray: treeObjType[] = JSON.parse(JSON.stringify(data));
  newArray.forEach((_, index) => {
    const parent = newArray.find(obj => obj.id === newArray[index].parentId);
    if (parent) {
      if (!parent.children) parent.children = [];
      parent.children.push(newArray[index])
    }
  })

  return newArray.filter((obj: treeObjType) => ['0', undefined].includes(obj?.parentId));
}

const tree = f(data);
console.log(tree);
