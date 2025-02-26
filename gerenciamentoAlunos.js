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


/*3. Adição de Alunos(as): Implemente uma função adicionarAluno(nome, idade, matricula, curso) que cria um novo registro aluno com os valores passados como argumentos e o adiciona à turma.*/

const adicionarAluno = (nome, idade, matricula, curso) => {
  const novoAluno = { nome, idade, matricula, curso }
  turma.push(novoAluno)
}
