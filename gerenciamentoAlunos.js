/*1. Definição de Registro: Crie um registro chamado aluno com os seguintes campos:
nome: Nome do aluno(a) (string)
idade: Idade do aluno(a) (número inteiro)
matricula: Matrícula do aluno(a) (número inteiro)
curso: Código do curso do aluno(a) (string), por exemplo, EC, SI, CC, etc.*/
const aluno = [
    {
        nome: "Marcos",
        idade: 20,
        matricula: 563224,
        curso: "CC"
    },
    { 
        nome: "Luiza", 
        idade: 17, 
        matricula: 862379, 
        curso: "SI" 
    },
    { 
        nome: "Pedro", 
        idade: 19, 
        matricula: 368572, 
        curso: "EC" 
    }
]


/*2. Criação da Turma: Crie uma lista chamada turma que armazenará instâncias dos(as) alunos(as).*/
const turma = [
  { nome: "Marcos", idade: 20, matricula: 563224, curso: "CC" },
  { nome: "Luiza", idade: 17, matricula: 862379, curso: "SI" },
  { nome: "Pedro", idade: 19, matricula: 368572, curso: "EC" }
]


/*3. Adição de Alunos(as): Implemente uma função adicionarAluno(nome, idade, matricula, curso) que cria um 
novo registro aluno com os valores passados como argumentos e o adiciona à turma.*/
const adicionarAluno = (nome, idade, matricula, curso) => {
  const novoAluno = { nome, idade, matricula, curso }
  turma.push(novoAluno)
}


/*4. Listagem de Alunos(as): Crie uma função listarAlunos() que percorre a turma e exibe os detalhes de cada 
aluno(a) (nome, idade, matricula e curso) no console.*/
const listarAlunos = () => {
  turma.forEach(aluno => {
    console.log(`Nome: ${aluno.nome}`)
    console.log(`Idade: ${aluno.idade}`)
    console.log(`Matrícula: ${aluno.matricula}`)
    console.log(`Curso: ${aluno.curso}`)
  })
}


/*5. Busca por Curso: Implemente uma função buscarPorCurso(curso) que recebe um curso como argumento e retorna 
uma lista contendo todos os alunos do catálogo que pertencem ao curso especificado.*/
const buscarPorCurso = (curso) => {
  const alunosDoCurso = turma.filter(aluno => aluno.curso === curso)
  return alunosDoCurso
}


/*6. Remoção de Alunos: Crie uma função removerAluno(nome) que recebe o nome de um aluno(a) como argumento e remove 
o aluno(a) correspondente da turma.*/
const removerAluno = (nome) => (turma = turma.filter(aluno => aluno.nome !== nome))


/*7. Ordenação: Implemente uma função para ordenar os alunos(as) na turma por número de matrícula, do mais antigo 
ao mais recente.*/
const ordenarAlunos = () => {
  turma.sort((x, y) => x.matricula - y.matricula)
}


/*8. Contagem de Alunos por Curso: Crie uma função que retorna a contagem de alunos(as) para cada curso presente na
turma.*/
const contarAlunosPorCurso = () => {
  const contagem = turma.reduce((x, c) => {
    x[c.curso] = (x[c.curso] || 0) + 1
    return x
  })
  return contagem
}


/*9. Edição de Alunos: Permita a edição dos detalhes de um(a) aluno(a), como nome, matricula, idade ou curso.*/
const editarAluno = (nome, novoNome, novaMatricula, novaIdade, novoCurso) => {
  turma.forEach(aluno => {
    if (aluno.nome === nome) {
      aluno.nome = novoNome
      aluno.matricula = novaMatricula
      aluno.idade = novaIdade
      aluno.curso = novoCurso
    }
  })
}
