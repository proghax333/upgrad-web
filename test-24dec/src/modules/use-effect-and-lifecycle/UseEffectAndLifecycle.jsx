import { useEffect, useState } from "react";

function MountUnmountDemoComponent() {
  useEffect(() => {
    console.log("Component Mounted!");

    return () => {
      console.log("Component Unmounting...");
    };
  }, []);

  return <div>I am a component. I have been mounted.</div>;
}

function UseEffectAndLifecycle() {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <h1>
        <code>useEffect</code> and cleanup function demo
      </h1>
      <hr />

      <p style={{ marginTop: "2rem" }}>
        This component will demonstrate how useEffect and cleanup functions
        work.
      </p>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          style={{
            padding: "0.5rem",
            background: "#00afff",
            color: "white",
            border: "none",
          }}
          onClick={() => setIsMounted(true)}
        >
          Mount the component
        </button>
        <button
          style={{
            padding: "0.5rem",
            background: "#ff00a0",
            color: "white",
            border: "none",
          }}
          onClick={() => setIsMounted(false)}
        >
          Unmount the component
        </button>
      </div>

      <p>
        Mounting Status: <strong>{isMounted ? "Mounted" : "Unmounted"}</strong>
      </p>

      <hr style={{ margin: "2rem 0" }} />

      {isMounted && <MountUnmountDemoComponent />}
    </div>
  );
}

export default UseEffectAndLifecycle;
