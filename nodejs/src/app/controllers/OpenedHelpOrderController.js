import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const openedHelpOrders = await HelpOrder.findAll({
      where: {
        answer: null,
      },
      attributes: ['question'],
      include: [
        {
          model: Student,
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(openedHelpOrders);
  }
}

export default new HelpOrderController();
