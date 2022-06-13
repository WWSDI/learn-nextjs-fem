const notes = Array.from({ length: 15 }, (_, i) => ({
  data: {
    title: `Note ${i+1}`,
    content: `Some random content`,
  },
  id: Date.now() + i,
}));

// module.exports = notes
export default notes;
