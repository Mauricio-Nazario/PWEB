var Aluno1 = {
  ra: '0030481811345',
  nome: 'Maurício Nazario'
}
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1.ra = '0030481912020';
Aluno1.nome = 'Luzia Santos';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);

Aluno1['ra'] = '0030481918050';
Aluno1['nome'] = 'Marcio Souza';
alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);