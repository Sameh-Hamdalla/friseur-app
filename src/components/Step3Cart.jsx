

function Step3Time({ time, setTime, setStep }) {
  const times = ["09:00", "10:00", "11:00", "12:00"];

  return (
    <>
      <h1>Uhrzeit wählen</h1>

      {times.map((t) => (
        <button
          key={t}
          onClick={() => setTime(t)}
          style={{
            background: time === t ? "black" : "#eee",
            color: time === t ? "white" : "black",
            margin: "5px",
          }}
        >
          {t}
        </button>
      ))}

      <button disabled={!time} onClick={() => setStep(4)}>
        Weiter
      </button>
    </>
  );
}

export default Step3Time;