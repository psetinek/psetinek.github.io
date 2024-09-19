import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./particles.json";
import './ParticleBackground.css';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
      if (init) {
          return;
      }

      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, [init]);

  return (
    <>
      {init && <Particles options={particlesOptions} id="tsparticles"/>}
    </>
  );

};

export default ParticleBackground;
