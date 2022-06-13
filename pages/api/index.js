import nc from "next-connect";
import notes from "../../src/data/data";

const handler = nc()
  // GET all ntoes
  .get((req, res) => {
    res.json({ message: "ok", notes });
  })
  // Create (POST) a new note
  .post((req, res) => {
    const id = Date.now();
    const note = { data: req.body, id };
    notes.push(note);
    res.json({ message: "new note created successfully", data: note });
  });

export default handler;
