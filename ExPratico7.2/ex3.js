const { exportAllDeclaration } = require("@babel/types");
const { describe } = require("yargs");

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

addTurno(lesson2, 'turno', 'noite');

const listaDeChaves = (objeto) => Object.keys(objeto);

const sizeOfObject = (objeto) => Object.keys(objeto).length;

const listaDeValores = (objeto) => Object.values(objeto);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};


const getValueByNumber = (objeto, numero) => {
  const array = Object.values(objeto);
  return array[numero]; 
}

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};

const getNumberOfStudentsMat = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for(let index in array) {
    if(obj[array[index]].materia === 'Matemática') {
      total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));

