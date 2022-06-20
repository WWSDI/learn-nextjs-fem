const notes = Array.from({ length: 15 }, (_, i) => ({
  data: {
    title: `Note ${i + 1}`,
    content: `Some random content`,
  },
  // SS: ❌ I have discovered that the following line doesn't work, as in that this file is run and create a new set of data with different id everytime for index.js and [id].js so that these two pages always get two sets of different ids.
  // id: Date.now() + i, 
  id: Date.parse("2022") + i,
}));

module.exports = notes
// export default notes;
