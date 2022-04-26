import "./Playground.css";

const Playground = (props: { addCross: Function; playground: String[] }) => (
  <div className="outerWrapper">
    <div className="innerWrapper">
      <div className="playground">
        <div
          onClick={() => props.addCross(0, false)}
          className={"field " + props.playground[0]}
        ></div>
        <div
          onClick={() => props.addCross(1, false)}
          className={"field " + props.playground[1]}
        ></div>
        <div
          onClick={() => props.addCross(2, false)}
          className={"field " + props.playground[2]}
        ></div>
        <div
          onClick={() => props.addCross(3, false)}
          className={"field " + props.playground[3]}
        ></div>
        <div
          onClick={() => props.addCross(4, false)}
          className={"field " + props.playground[4]}
        ></div>
        <div
          onClick={() => props.addCross(5, false)}
          className={"field " + props.playground[5]}
        ></div>
        <div
          onClick={() => props.addCross(6, false)}
          className={"field " + props.playground[6]}
        ></div>
        <div
          onClick={() => props.addCross(7, false)}
          className={"field " + props.playground[7]}
        ></div>
        <div
          onClick={() => props.addCross(8, false)}
          className={"field " + props.playground[8]}
        ></div>
      </div>
    </div>
  </div>
);

export default Playground;
