const formatMail = (body) => {
    let {
      name,
      company,
      jobPosition: jobPosition,
      hours: hoursWeek,
      income
    } = body;
  
    return {
      subject: getSubject(jobPosition, company),
      text: getText(name, company, jobPosition, hoursWeek, income)
    };
  };
  
  const getSubject = (jobPosition, company) =>
    `Vaga: ${jobPosition} in ${company}`;
  
  const getText = (
    name = "N/A",
    company = "N/A",
    jobPosition = "N/A",
    hoursWeek = "N/A",
    income = "N/A"
  ) => 
    `Prazer, meu nome é ${name}. Trabalho para a empresa: ${company}.
  Te convido para a vaga de ${jobPosition}. Esta oportunidade é de ${hoursWeek}h/semana, recebendo uma renda mensal de: R$${income}`;
  
  module.exports = { formatMail };
  