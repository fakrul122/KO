module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`Team KnockOut | +help`, {
    type: "WATCHING",
  });
};
