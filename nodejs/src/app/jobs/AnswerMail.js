import Mail from '../../lib/Mail';

class AnswerMail {
  get key() {
    return 'AnswerMail';
  }

  async handle({ data }) {
    const { student, helpOrder, answer } = data;
    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Gympoint | Sua pergunta foi respondida!',
      template: 'answer',
      context: {
        student: student.name,
        question: helpOrder.question,
        answer,
      },
    });
  }
}

export default new AnswerMail();
