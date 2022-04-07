export default function PostWriting() {
  return (
    <div>
      <h2>What’s on your mind?</h2>
      <section>
        <label htmlFor="title-input">
          Title
          <input id="title-input" type="text" placeholder="Hello world!" />
        </label>
        <label htmlFor="content-input">
          Content
          <input
            id="content-input"
            type="textarea"
            placeholder="Content here"
          />
        </label>
        <button type="button">CREATE</button>
      </section>
    </div>
  );
}
