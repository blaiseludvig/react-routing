export function Kapcsolat() {
  return (
    <>
      <h1>Kapcsolat</h1>
      <b>
        <label>Email:</label>
      </b>
      <br />
      <input type="email" name="email" id="emailInput" />
      <br />
      <b>
        <label>Üzenet:</label>
      </b>
      <br />
      <textarea id="textareaInput" cols={30} rows={10}></textarea>
      <br />
      <button
        onClick={() => {
          const emailInput = document.getElementById(
            "emailInput"
          ) as HTMLInputElement;
          const textareaInput = document.getElementById(
            "textareaInput"
          ) as HTMLInputElement;

          if (emailInput.value && textareaInput.value) {
            alert("Küldés sikeres!");
          } else {
            alert("Töltse ki az összes mezőt!");
          }
        }}
      >
        Küldés
      </button>
    </>
  );
}
