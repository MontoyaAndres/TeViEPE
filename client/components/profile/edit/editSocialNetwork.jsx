import React, { useState } from "react";

const arraySocialNetwork = [
  "Twitter",
  "GitHub",
  "Facebook",
  "Linkedin",
  "Instagram",
  "YouTube",
  "Spotify",
  "Whatsapp",
  "Skype"
];

function urlSocialNetwork({ name, url }) {
  switch (name) {
    case "Twitter":
      return { name, url: `https://twitter.com/${url}` };

    case "GitHub":
      return { name, url: `https://github.com/${url}` };

    case "Facebook":
      return { name, url: `https://facebook.com/${url}` };

    case "Linkedin":
      return { name, url: `https://www.linkedin.com/in/${url}` };

    case "Instagram":
      return { name, url: `https://www.instagram.com/${url}` };

    case "YouTube":
      return { name, url };

    case "Spotify":
      return { name, url };

    case "Whatsapp":
      return { name, url };

    case "Skype":
      return { name, url };

    default:
      break;
  }
}

const editSocialNetwork = ({ socialnetwork, setFieldValue }) => {
  const [state, setState] = useState({ name: "Twitter", url: "" });

  function handleAddElement(e) {
    e.preventDefault();

    if (state.url !== "") {
      setFieldValue("socialnetwork", [
        ...socialnetwork,
        urlSocialNetwork({ name: state.name, url: state.url })
      ]);
    }

    setState({ name: state.name, url: "" });
  }

  function handleDeleteElement(index) {
    setFieldValue("socialnetwork", [
      ...socialnetwork.slice(0, index),
      ...socialnetwork.slice(index + 1)
    ]);
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">Redes sociales</div>
      </div>

      <div className="card-content">
        <div className="content">
          <div className="field is-grouped">
            <div className="control has-icons-left">
              <div className="select is-medium">
                <select
                  name="name"
                  required
                  className="is-hovered"
                  onChange={e =>
                    setState({ name: e.target.value, url: state.url })
                  }
                >
                  {arraySocialNetwork.map((sn, i) => (
                    <option key={i} value={sn}>
                      {sn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="icon is-small is-left">
                <i
                  className={`fab fa-${state.name.toLowerCase()}`}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="control is-expanded">
              <input
                className="input is-hovered is-medium"
                type="text"
                name="url"
                onChange={e =>
                  setState({ name: state.name, url: e.target.value })
                }
                value={state.url}
                onKeyPress={e => {
                  if (e.key === "Enter") e.preventDefault();
                }}
                placeholder="Url, nombre de usuario o teléfono de red social"
              />
            </div>

            <div className="control">
              <a
                className="button is-info is-medium"
                onClick={handleAddElement}
              >
                <span className="icon">
                  <i className="fas fa-plus" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          {socialnetwork && socialnetwork.length
            ? socialnetwork.map((sn, i) => (
                <span
                  key={i}
                  className="tag is-info is-large"
                  style={{ margin: 5 }}
                >
                  <div className="icon is-small">
                    <i
                      className={`fab fa-${sn.name.toLowerCase()}`}
                      aria-hidden="true"
                    />
                  </div>

                  {sn.name === "Skype" ? (
                    <a style={{ color: "white" }} href={`skype:${sn.url}?chat`}>
                      {sn.url}
                    </a>
                  ) : sn.name === "Whatsapp" ? (
                    <a
                      style={{ color: "white" }}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={`https://wa.me/${
                        sn.url
                      }?text=Hola,%20¿Cómo%20te%20va?`}
                    >
                      {sn.url}
                    </a>
                  ) : (
                    <a
                      style={{ color: "white" }}
                      rel="noopener noreferrer"
                      target="_blank"
                      href={sn.url}
                    >
                      {sn.url}
                    </a>
                  )}

                  <button
                    type="button"
                    className="delete"
                    onClick={() => handleDeleteElement(i)}
                  />
                </span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default editSocialNetwork;
