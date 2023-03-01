import "./Events.css";

export default function Events() {
  const playMovie = (e) => {
    e.target.play();
  };
  const stopMovie = (e) => {
    e.target.pause();
  };

  return (
    <section id="events">
      <h1>Events</h1>

      <div className="video">
        <video
          controls
          muted="true"
          onMouseOver={playMovie}
          onMouseOut={stopMovie}
        >
          <source src="images/nafas.mp4" type="video/mp4" />
        </video>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ea,
        voluptate enim sapiente commodi inventore numquam, sit facere iure modi,
        eum aliquam veritatis pariatur dolores eaque amet hic! Nisi et alias
        voluptatum facilis sunt quasi consequatur amet, deserunt, aperiam totam
        numquam dolor. Quos dicta magni illum maxime. Sint, dicta non!
      </p>
    </section>
  );
}
