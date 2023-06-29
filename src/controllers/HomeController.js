import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Murillo',
      sobrenome : 'Oliveira',
      email: 'murillo@gmail.com',
      idade: 17,
      peso: 62,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
