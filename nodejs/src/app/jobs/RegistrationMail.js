import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { student, plan, registration } = data;
    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Gympoint | Seja Bem-Vindo!',
      template: 'registration',
      context: {
        student: student.name,
        title: plan.title,
        end_date: format(
          parseISO(registration.end_date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new RegistrationMail();
