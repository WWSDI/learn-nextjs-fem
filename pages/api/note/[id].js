import nc from "next-connect";
import notes from "../../../src/data/data";

const getNote = (id) => notes.find((note) => note.id == id);
const getNoteIdx = (id) => notes.findIndex((note) => note.id == id);

const handler = nc()
  // GET one note
  .get((req, res) => {
    const id = req.query.id;
    console.log("😍", id);
    const note = getNote(id);
    if (!note) return res.status(404). json({ message: "not found" });
    res.json({ message: "ok", note });
  })
  // Update (PATCH) one note
  .patch((req, res) => {
    const id = req.query.id;
    // update the note
    const idx = getNoteIdx(id)
    notes[idx] = { ...req.body, id: notes[idx].id };
    if (idx === -1) return res.status(404).json({ message: "not found" });
    res.json({ message: "ok", note: notes[idx] });
  })
  // DEL one note
  .delete((req, res) => {
    const id = req.query.id;
    const idx = getNoteIdx(id)
    if(idx===-1) return res.status(404).json({ message: "not found" });
    notes.splice(idx, 1)
    res.json({message:"delete success", id})
  });

export default handler;
