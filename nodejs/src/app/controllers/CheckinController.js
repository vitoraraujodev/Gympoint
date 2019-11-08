import { subDays } from 'date-fns';
import { Op } from 'sequelize';
import Checkin from '../models/Checkin';
import Student from '../models/Student';

class CheckinController {
  async index(req, res) {
    const student_id = req.params.id; //eslint-disable-line

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists' });
    }

    const checkins = await Checkin.findAll({
      where: {
        student_id,
      },
      attributes: ['id', 'created_at'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(checkins);
  }

  async store(req, res) {
    const student_id = req.params.id; //eslint-disable-line

    const student = await Student.findByPk(student_id);

    if (!student) {
      return res.status(401).json({ error: 'Student does not exists' });
    }

    const actualDate = new Date();
    const weekAgo = subDays(actualDate, 7);

    const checkins = await Checkin.count({
      where: {
        student_id,
        created_at: {
          [Op.between]: [weekAgo, actualDate],
        },
      },
    });

    console.log(checkins); //eslint-disable-line

    if (checkins >= 5) {
      return res.status(401).json({
        error: 'You cannot check-in more than 5 times in a 7 day period.',
      });
    }

    const checkin = await Checkin.create({
      student_id,
      created_at: actualDate,
    });
    return res.json(checkin);
  }
}

export default new CheckinController();
