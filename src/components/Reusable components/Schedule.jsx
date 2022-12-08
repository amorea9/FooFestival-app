function Schedule(props) {
  return (
    <article className="schedule-comp">
      {" "}
      <h2>bands playing here</h2>
      <button onClick={props.getProgramPage}>Click here to see</button>
    </article>
  );
}

export default Schedule;
