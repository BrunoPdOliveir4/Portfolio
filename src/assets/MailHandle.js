const formatMail = (body) => {
    let {
      name,
      company,
      jobPosition: jobPosition,
      contact,
      hours: hoursWeek,
      income
    } = body;
  
    return {
      subject: getSubject(jobPosition, company),
      text: getText(name, company, jobPosition, hoursWeek, income, contact)
    };
  };
  
  const getSubject = (jobPosition, company) =>
    `Vaga: ${jobPosition} in ${company}`;
  
  const getText = (name, company, jobTitle, hoursWeek, income, contact) =>
    `Prazer, meu nome é ${name}. Trabalho para a empresa: ${company}.
  Te convido para a vaga de ${jobTitle}. Esta oportunidade é de ${hoursWeek}h/semana, com renda mensal de R$${income}.
  Para mais informações, você pode me contatar via: ${contact}`;
  
  module.exports = { formatMail };
  