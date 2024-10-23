const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "10px solid black",
      background: "yellow",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  >
    {/* Add eyes */}
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "black",
        position: "absolute",
        top: "15px",
        left: "10px",
      }}
    />

    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "black",
        position: "absolute",
        top: "15px",
        right: "10px",
      }}
    />
    {/* Smile */}
    <div
      style={{
        width: "25px",
        height: "15px",
        border: "5px solid black",
        borderInline: "0",
        // borderTopLeftRadius: "20px",
        // borderTopRightRadius: "20px",
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    />
  </div>
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  />
);

const RightArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      transform: "rotate(-30deg)",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftArm = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      transform: "rotate(30deg)",
      transformOrigin: "right bottom",
    }}
  />
);

const RightLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-90px",
      transform: "rotate(60deg)",
      transformOrigin: "left bottom",
    }}
  />
);

const LeftLeg = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "0",
      transform: "rotate(-60deg)",
      transformOrigin: "right bottom",
    }}
  />
);

const BodyPart = [HEAD, BODY, RightArm, LeftArm, RightLeg, LeftLeg];

type HangmanDrawingProps = {
  numOfGuess: number;
};
export function HangmanDrawing({ numOfGuess }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BodyPart.slice(0, numOfGuess)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          top: 0,
          right: 0,
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
