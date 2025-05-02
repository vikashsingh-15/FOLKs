const url = "http://localhost:8000";

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `${url}/file/${req.file.filename}`;
  return res.status(200).json({ imageUrl });
};
