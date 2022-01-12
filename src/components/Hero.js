import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from 'react-three-fiber';
import circleImg from '../assets/circle.png';
import { Suspense, useCallback, useMemo, useRef, useState, useEffect } from 'react';
import {MdArrowDropDown} from 'react-icons/md';
extend({OrbitControls})


/*
function CameraControls(){
  const {
    camera,
    gl: {domElement}
  } = useThree();

  const controlsRef = useRef();
  useFrame(() => controlsRef.current.update())

  return (
    <orbitControls
      args={[camera, domElement]}
      ref={controlsRef}
      autoRotate
      autoRotateSpeed={-0.5}
    />
  );
}
*/

function Points( { theme } ) {
  const imgTex = useLoader(THREE.TextureLoader, circleImg);
  const bufferRef = useRef();

  let t = 0;
  let f = 0.001;
  let a = 3;
  const graph = useCallback((x, y) => {
    return Math.sin(f * (x ** 2 + y ** 2 + t)) * a;
  }, [t, f, a, theme])

  const count = 100
  const sep = 3
  let positions = useMemo(() => {
    let positions = []

    for (let xi = 0; xi < count; xi++) {
      for (let yi = 0; yi < count; yi++) {
        let x = sep * (xi - count / 2);
        let y = sep * (yi - count / 2);
        let z = graph(x, y);
        positions.push(x, z, y);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph, theme])

  useFrame(() => {
    t += 15
    
    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  })

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attachObject={['attributes', 'position']}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

function AnimationCanvas({ theme }) {
  /*
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setYPos(window.pageYOffset);
      console.log(yPos);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [yPos]);
  */

  return (
    <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
      <Suspense fallback={null}>
        <Points theme={theme} />
      </Suspense>
    </Canvas>
  );
}


const Hero = ({ theme } ) => {
  return (
    <div id="Hero" className="Hero">
      <div className="main-container">
        <h2 className="header bold no-select primary">i help you understand the world using data</h2>
        <p className="header regular italic no-select secondary">hej, my name is jonas-mika. i code cool stuff. have a look</p>
        <div className="icon">
            <MdArrowDropDown/>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas theme={theme}/>
      </Suspense>
    </div>
  );
}

export default Hero;
