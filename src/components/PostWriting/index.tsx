import "./style.scss";

import { WritePost } from "../WritePost";

export default function PostWriting() {
  return (
    <div className="post-writing-container">
      <h2>What’s on your mind?</h2>
      <WritePost
        typePost="CREATE"
        id={undefined}
        user="None"
        click={() => console.log()}
      />
    </div>
  );
}
