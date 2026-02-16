export const emailValidator = (email: string) => {
  // const re = /\S+@\S+\.\S+/;
  // const re = /[a-z]{1}\/[0-9]{6}\@dac\.unicamp\.br
  const re = /^[a-z][0-9]{6}@dac\.unicamp\.br$/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Oops! Email isnt a123456@dac.unicamp.br alike.';
  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  if (password.length <8) return "Password should have 8 or more digits"

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

// verificacao se o ra existe no banco de dados scrapado
export const raValidator = (ra: string) => {
  if (!ra || ra.length <= 0) return 'RA cannot be empty'
  if (ra.length != 6) return 'RA must be a 6 digit long number'
  if (!/^\d{6}$/.test(ra)) return 'RA must contain only numbers'

  return ''
};

// fazer uma request para averiguar se aquele usuario com ra e senha (ra imbutido)
// ja existe no banco de dados ou nao
export const loginValidator = (email:string, password: string) => {
  
};