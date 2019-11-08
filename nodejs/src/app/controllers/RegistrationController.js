import * as Yup from 'yup';
import { parseISO, addMonths, isBefore, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

import Mail from '../../lib/Mail';

class RegistrationController {
  async index(req, res) {
    const registrations = await Registration.findAll({
      attributes: ['start_date', 'end_date', 'price'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Plan,
          attributes: ['id', 'duration', 'price'],
        },
      ],
    });

    return res.json(registrations);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { student_id, plan_id, start_date } = req.body; // eslint-disable-line

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(401).json({ error: 'Plan does not exists' });
    }

    if (isBefore(parseISO(start_date), new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted.' });
    }

    const price = plan.duration * plan.price;

    const end_date = addMonths(parseISO(start_date), plan.duration); // eslint-disable-line

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Gympoint | Seja Bem-Vindo!',
      template: 'registration',
      context: {
        student: student.name,
        title: plan.title,
        end_date: format(
          registration.end_date,
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });

    return res.json(registration);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number(),
      plan_id: Yup.number(),
      start_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const registration = await Registration.findByPk(req.params.id);

    const { student_id, plan_id, start_date } = req.body; // eslint-disable-line

    if (student_id !== registration.student_id) { // eslint-disable-line
      const student = await Student.findByPk(student_id);

      if (!student) {
        return res.status(401).json({ error: 'Student does not exists' });
      }
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(401).json({ error: 'Plan does not exists' });
    }

    if (isBefore(parseISO(start_date), new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted.' });
    }

    const end_date = addMonths(parseISO(start_date), plan.duration); // eslint-disable-line

    const price = plan.duration * plan.price;

    const newRegistration = await registration.update({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    return res.json(newRegistration);
  }

  async delete(req, res) {
    const registration = await Registration.findByPk(req.params.id);

    if (!registration) {
      return res.status(401).json({ error: 'Registration does not exists' });
    }

    await registration.destroy();

    return res.json({ okay: true });
  }
}

export default new RegistrationController();
