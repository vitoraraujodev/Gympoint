import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const student_id = req.params.id; //eslint-disable-line

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: {
        student_id,
      },
      attributes: ['question', 'answer', 'answer_at'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    const student_id = req.params.id; //eslint-disable-line

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists.' });
    }

    const { question } = req.body;

    const helpOrder = await HelpOrder.create({ student_id, question });

    return res.json(helpOrder);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }
    const help_order_id = req.params.id; //eslint-disable-line

    const helpOrder = await HelpOrder.findByPk(help_order_id);

    if (!helpOrder) {
      return res.status(401).json({ error: 'Help order does not exists.' });
    }

    const { answer } = req.body;

    const answer_at = new Date(); //eslint-disable-line

    const newHelpOrder = await helpOrder.update({ answer, answer_at });

    return res.json(newHelpOrder);
  }
}

export default new HelpOrderController();
