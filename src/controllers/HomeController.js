import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Murillo',
      email: 'murillo@gmail.com',
      idade: 17,
      peso: 62,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
