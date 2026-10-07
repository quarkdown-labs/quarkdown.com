/** Discount on Pro plans for students and educators. */
export const educationDiscount = '20%';

/** The email that applies for the education discount, prefilled for the applicant. */
export const educationEmail = {
  subject: 'Education discount for Quarkdown Studio',
  body: [
    `I'd like to apply for the ${educationDiscount} education discount on Quarkdown Studio Pro.`,
    '',
    'Name: [your full name]',
    'Role: [student, teacher, researcher, staff]',
    'Institution: [your school or university]',
    'Quarkdown Studio account email: [the email address shown in Settings > Account]',
  ].join('\n'),
};
