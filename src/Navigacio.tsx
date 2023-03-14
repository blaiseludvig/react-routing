import { Link } from "@tanstack/react-location";

export function Navigacio() {
  return (
    <>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/"}>Főoldal</Link>
        <Link to={"/bemutatkozas"}>Bemutatkozás</Link>
        <Link to={"/kapcsolat"}>Kapcsolat</Link>
      </nav>
      <hr />
    </>
  );
}
