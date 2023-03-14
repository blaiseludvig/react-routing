import fonokImg from "./assets/profile.png";

export function Bemutatkozas() {
  return (
    <>
      <h1>Történet</h1>
      <p>
        A Petrik Webehely-gyárat 2011-ben alapították, hogy az egyre növekvő
        webes igényeket ki tudja elégíteni. 2022-ben multinacionális céggé nőtte
        ki magát a kezdetben önkéntesekből álló szervezet.
      </p>
      <h2>Jelenlegi tagjaink</h2>
      <div style={{display: "flex",gap: "3rem"}}>
        <ul>
          <li>* Erdős Ildikó</li>
          <li>* Jónás Viola</li>
          <li>* Kató Anna</li>
          <li>* Pintér Koppány</li>
          <li>* Sas Gizi</li>
        </ul>
        <img
          src={fonokImg}
          id="fonok"
          alt="Kép a főnökről"
          style={{
            maxHeight: "100px",
          }}
        />
      </div>
    </>
  );
}
