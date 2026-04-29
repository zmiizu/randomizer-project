import { useState } from "react";
import "./App.css";

const ROSTER = [
  ["drmario", "mario", "luigi", "bowser", "peach", "yoshi", "dk", "falcon", "ganondorf"],
  ["falco", "fox", "ness", "climbers", "kirby", "samus", "zelda", "link", "younglink"],
  ["pichu", "pikachu", "puff", "watch", "marth", "roy"],
];

export default function App() {
  const [nombres, setNombres] = useState(["", "", "", ""]);
  const [jugadorActivo, setJugadorActivo] = useState(null);
  const [personajes, setPersonajes] = useState([[], [], [], []]);
  const [resultado, setResultado] = useState(null);

  function actualizarNombre(index, valor) {
    // se crea una copia del array y se introduce el valor
    const nuevosNombres = [...nombres];
    nuevosNombres[index] = valor;
    setNombres(nuevosNombres);
  }

  function seleccionarPersonaje(nombrePersonaje) {
    // si no se pulsa seleccionar sal de la funcion
    if (jugadorActivo === null) return;
    //copia del array de personajes para actualizar la lista
    const nuevosPersonajes = [...personajes];

    if (nuevosPersonajes[jugadorActivo].includes(nombrePersonaje)) {
      // Si ya está, se quita
      nuevosPersonajes[jugadorActivo] = nuevosPersonajes[jugadorActivo].filter(
        (p) => p !== nombrePersonaje,
      );
    } else {
      // Si no está, se añade
      nuevosPersonajes[jugadorActivo] = [
        ...nuevosPersonajes[jugadorActivo],
        nombrePersonaje,
      ];
    }
    // se actualiza la lista
    setPersonajes(nuevosPersonajes);
  }

  function randomizar() {
    const indices = [0, 1, 2, 3].sort(() => Math.random() - 0.5);

    const equipo1 = [indices[0], indices[1]];
    const equipo2 = [indices[2], indices[3]];

    const resultado = {
      equipo1: equipo1.map((i) => ({
        nombre: nombres[i],
        personaje:
          personajes[i][Math.floor(Math.random() * personajes[i].length)],
      })),
      equipo2: equipo2.map((i) => ({
        nombre: nombres[i],
        personaje:
          personajes[i][Math.floor(Math.random() * personajes[i].length)],
      })),
    };

    setResultado(resultado);
  }
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div>
            <a href="/" tabIndex="1">
              <img src="/smashLogo.webp" alt="Logo Smash" className="logo" />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <div className="roster-container">
          {ROSTER.map((fila, i) => (
            <div key={i} className="roster-row">
              {fila.map((personaje) => (
                <img
                  key={personaje}
                  src={`/characters/${personaje}.png`}
                  alt="Seleccion personaje"
                  className="roster"
                  onClick={() => seleccionarPersonaje(personaje)}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="content-inputs">
          <div className="player-row">
            <input
              className="player-input"
              placeholder="Player 1"
              onBlur={(e) => actualizarNombre(0, e.target.value)}
            />
            <button
              className="btn-seleccionar"
              onClick={() => setJugadorActivo(0)}
            >
              {jugadorActivo === 0 ? (
                <>
                  <div className="custom-loader"></div>
                  Select your characters...
                </>
              ) : (
                "Select"
              )}
            </button>
            <div className="personajes-seleccionados">
              {personajes[0].map((p) => (
                <img
                  key={p}
                  src={`/characters/${p}.png`}
                  alt={p}
                  className="personaje-seleccionado"
                />
              ))}
            </div>
          </div>
          <div className="player-row">
            <input
              className="player-input"
              placeholder="Player 2"
              onBlur={(e) => actualizarNombre(1, e.target.value)}
            />
            <button
              className="btn-seleccionar"
              onClick={() => setJugadorActivo(1)}
            >
              {jugadorActivo === 1 ? (
                <>
                  <div className="custom-loader"></div>
                  Select your characters...
                </>
              ) : (
                "Select"
              )}
            </button>
            <div className="personajes-seleccionados">
              {personajes[1].map((p) => (
                <img
                  key={p}
                  src={`/characters/${p}.png`}
                  alt={p}
                  className="personaje-seleccionado"
                />
              ))}
            </div>
          </div>
          <div className="player-row">
            <input
              className="player-input"
              placeholder="Player 3"
              onBlur={(e) => actualizarNombre(2, e.target.value)}
            />
            <button
              className="btn-seleccionar"
              onClick={() => setJugadorActivo(2)}
            >
              {jugadorActivo === 2 ? (
                <>
                  <div className="custom-loader"></div>
                  Select your characters...
                </>
              ) : (
                "Select"
              )}
            </button>
            <div className="personajes-seleccionados">
              {personajes[2].map((p) => (
                <img
                  key={p}
                  src={`/characters/${p}.png`}
                  alt={p}
                  className="personaje-seleccionado"
                />
              ))}
            </div>
          </div>
          <div className="player-row">
            <input
              className="player-input"
              placeholder="Player 4"
              onBlur={(e) => actualizarNombre(3, e.target.value)}
            />
            <button
              className="btn-seleccionar"
              onClick={() => setJugadorActivo(3)}
            >
              {jugadorActivo === 3 ? (
                <>
                  <div className="custom-loader"></div>
                  Select your characters...
                </>
              ) : (
                "Select"
              )}
            </button>
            <div className="personajes-seleccionados">
              {personajes[3].map((p) => (
                <img
                  key={p}
                  src={`/characters/${p}.png`}
                  alt={p}
                  className="personaje-seleccionado"
                />
              ))}
            </div>
          </div>
          <button className="randomize" onClick={randomizar}>
            Randomize!
          </button>
        </div>
        {resultado !== null && (
          <div className="modal-overlay" onClick={() => setResultado(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Equipos</h2>
              <div className="modal-equipos">
                <div className="modal-equipo">
                  <h3>Team 1</h3>
                  {resultado.equipo1.map((jugador) => (
                    <div key={jugador.nombre}>
                      <p>{jugador.nombre}</p>
                      <img
                        src={`/characters/${jugador.personaje}.png`}
                        alt={jugador.personaje}
                      />
                    </div>
                  ))}
                </div>
                <div class="wrapper">
                  <svg>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                      VS
                    </text>
                  </svg>
                </div>
                <div className="modal-equipo">
                  <h3>Team 2</h3>
                  {resultado.equipo2.map((jugador) => (
                    <div key={jugador.nombre}>
                      <p>{jugador.nombre}</p>
                      <img
                        src={`/characters/${jugador.personaje}.png`}
                        alt={jugador.personaje}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-cerrar" onClick={() => setResultado(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
