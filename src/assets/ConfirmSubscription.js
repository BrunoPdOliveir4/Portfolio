const subscribingMail = (body) => {
  let { user } = body;

  return {
    subject: getSubject(),
    text: getText(user),
  };
};

const getSubject = () =>
`Confirm email vinculation to account in assistir com você`;

const getText = (user) =>
`Are you subscribing this account as ${user} in the 'assistir com você'?`;

module.exports = { subscribingMail };
  