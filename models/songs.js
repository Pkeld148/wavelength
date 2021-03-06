module.exports = function (sequelize, DataTypes) {
  const Song = sequelize.define("Song", {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: "0",
    },
    total_ratings: DataTypes.INTEGER,
    // Depending on how the API works, might not need "url" but putting in for now
    url: DataTypes.STRING,
  });

  return Song;
};
