import * as Yup from 'yup';
import { parseISO, addMonths, isBefore } from 'date-fns';

import Registration from '../models/Registration';
import Plan from '../models/Plan';
import Student from '../models/Student';

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
      return res.status(400).json({ error: 'Student does not exists' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan does not exists' });
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

    return res.json(registration);
  }
  /* 
  async update(req, res) {
    const schema = Yup.object().shape({
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const registration = await Registration.findByPk(req.params.id);

    const { title, duration, price } = await registration.update(req.body);

    return res.json({ title, duration, price });
  }

  async delete(req, res) {
    const registration = await Registration.findByPk(req.params.id);
    await registration.destroy();

    return res.json({ okay: true });
  } */
}

export default new RegistrationController();
