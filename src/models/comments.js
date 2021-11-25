import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentsSchema = mongoose.Schema(
  {
    message: String,
    datetime: String,
  },
  { collection: "comments" }
);
const CommentsModel = mongoose.model("Comment", commentsSchema);

export default CommentsModel;
