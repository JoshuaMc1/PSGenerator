import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { generatePassword } from "./helpers/generator";
import Alert from "./components/Alert";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [showError, setShowError] = useState(false);
  const [reload, setReload] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (
      !(
        includeUppercase ||
        includeLowercase ||
        includeNumbers ||
        includeSymbols
      )
    ) {
      setMessage("Debe seleccionar al menos una opción.");

      setShowError(true);
      return;
    }

    setShowError(false);

    if (passwordLength < 8) {
      setMessage(
        "La contraseña debe tener al menos 8 caracteres. Por favor, modifique los parámetros de generación.",
      );

      setShowError(true);
      return;
    }

    setShowError(false);

    setPassword(
      generatePassword(passwordLength, {
        uppercase: includeUppercase,
        lowercase: includeLowercase,
        numbers: includeNumbers,
        symbols: includeSymbols,
      }),
    );
  }, [
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    reload,
  ]);

  const handleClickCopyPassword = () => {
    if (!password) return;

    if (typeof navigator !== "undefined" && "clipboard" in navigator) {
      navigator.clipboard.writeText(password);
      return;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-3">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <h1 className="text-center text-3xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PSGenerator - Generador de contraseñas
            </span>
          </h1>
          <p className="text-lg font-medium lg:text-xl lg:font-semibold">
            Genere contraseñas seguras al instante con PSGenerator. Es simple,
            rápido y seguro.
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="card w-full bg-base-300 shadow-lg">
            <div className="card-body text-center">
              <div className="flex flex-row items-center justify-between gap-4">
                <p className="w-full truncate whitespace-normal text-2xl md:w-auto">
                  {password}
                </p>
                <button
                  className="btn btn-outline btn-primary btn-sm hidden md:block"
                  onClick={handleClickCopyPassword}
                  title="Copiar al portapapeles"
                >
                  <svg
                    className="h-6 w-6 text-gray-800 dark:text-white"
                    fill="currentColor"
                    width="24"
                    height="24"
                    version="1.1"
                    id="lni_lni-clipboard"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                  >
                    <path d="M45.5,9.4H44v-1c0-2.3-1.8-4.1-4-4.1h-5.7V4c0-1.2-1-2.3-2.3-2.3c-1.2,0-2.3,1-2.3,2.3v0.3H24c-2.2,0-4,1.8-4,4.1v1h-1.5c-3.2,0-5.8,2.7-5.8,5.9v41c0,3.3,2.6,5.9,5.8,5.9h27.1c3.2,0,5.8-2.7,5.8-5.9v-41C51.3,12,48.7,9.4,45.5,9.4z M24.5,8.8h15v2.8c0,0,0,0,0,0s0,0,0,0v2.8h-15V8.8z M46.8,56.3c0,0.8-0.6,1.4-1.3,1.4H18.5c-0.7,0-1.3-0.6-1.3-1.4v-41c0-0.8,0.6-1.4,1.3-1.4H20v1c0,2.3,1.8,4.1,4,4.1h16c2.2,0,4-1.8,4-4.1v-1h1.6c0.7,0,1.3,0.6,1.3,1.4V56.3z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="card max-w-[450px] bg-base-300 shadow-lg">
            <div className="card-body">
              <div className="flex flex-row items-center justify-between gap-4">
                <h2 className="card-title">Personalice su contraseña</h2>
                <button
                  className="btn btn-outline btn-primary btn-sm"
                  onClick={() => setReload(!reload)}
                  title="Generar nueva contraseña"
                >
                  <svg
                    className="h-6 w-6 text-gray-800 dark:text-white"
                    fill="currentColor"
                    width="24"
                    height="24"
                    version="1.1"
                    id="lni_lni-reload"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path d="M8.4,29c0.3,0,0.7-0.1,1-0.2l11.1-3.9c1.2-0.4,1.8-1.7,1.4-2.9c-0.4-1.2-1.7-1.8-2.9-1.4l-6.9,2.4c3.3-8.6,11.7-14.4,21.3-14.4c10.5,0,19.6,7,22.2,17c0.3,1.2,1.5,1.9,2.7,1.6c1.2-0.3,1.9-1.5,1.6-2.7c-3.1-12-14-20.4-26.6-20.4c-11.2,0-21.1,6.6-25.2,16.5l-2.1-6c-0.4-1.2-1.7-1.8-2.9-1.4c-1.2,0.4-1.8,1.7-1.4,2.9l3.8,10.9C6.1,28.3,7.2,29,8.4,29z" />
                      <path d="M62.1,49.7L58,39c-0.3-0.7-0.8-1.3-1.5-1.6c-0.7-0.3-1.5-0.3-2.2,0l-11,4.2c-1.2,0.4-1.7,1.7-1.3,2.9c0.4,1.2,1.7,1.7,2.9,1.3l6.9-2.6C47.8,50.5,40,55.3,31.3,55.3c-9.9,0-18.6-6.2-21.7-15.4c-0.4-1.2-1.7-1.8-2.8-1.4c-1.2,0.4-1.8,1.7-1.4,2.8c3.7,11,14.1,18.4,25.9,18.4c10.3,0,19.6-5.7,24.3-14.5l2.3,6.1c0.3,0.9,1.2,1.4,2.1,1.4c0.3,0,0.5,0,0.8-0.2C62,52.2,62.5,50.9,62.1,49.7z" />
                    </g>
                  </svg>
                </button>
              </div>
              {showError && <Alert type="error">{message}</Alert>}
              <div className="mb-4 mt-6 flex flex-col gap-4 md:flex-row">
                <div className="form-control">
                  <label className="label" htmlFor="passwordLength">
                    <span className="label-text font-semibold">
                      Longitud de la contraseña
                    </span>
                  </label>
                  <input
                    type="range"
                    min="8"
                    max="25"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(e.target.value)}
                    className="range range-primary range-xs"
                    id="passwordLength"
                  />
                  <label className="label" htmlFor="passwordLength">
                    <span className="label-text font-semibold text-primary">
                      {passwordLength}
                    </span>
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text font-semibold">
                        Incluir Mayúsculas
                      </span>
                      <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                        className="checkbox-primary checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text font-semibold">
                        Incluir Minúsculas
                      </span>
                      <input
                        type="checkbox"
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                        className="checkbox-primary checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text font-semibold">
                        Incluir Números
                      </span>
                      <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                        className="checkbox-primary checkbox"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text font-semibold">
                        Incluir Caracteres Especiales
                      </span>
                      <input
                        type="checkbox"
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                        className="checkbox-primary checkbox"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
