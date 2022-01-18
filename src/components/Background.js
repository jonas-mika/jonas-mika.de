import * as THREE from 'three';
import { Canvas, useFrame, useLoader    } from 'react-three-fiber';
import circleImg from '../assets/circle.png';
import { Suspense, useCallback, useMemo, useRef } from 'react';

function Points( { theme, animate } ) {
    const imgTex = useLoader(THREE.TextureLoader, circleImg);
    const bufferRef = useRef();

    let t = 5;
    let f = 0.005;
    let a = .8;

    const graph = useCallback((x, y) => {
        return Math.sin(f * (x ** 2 + y ** 2 + t)) * a;
    }, [t, f, a, theme])

    const count = 99 
    const sep = 1 
    let positions = useMemo(() => {
        let positions = []

        let z = 0;
        for (let xi = 0; xi < count; xi++) {
            for (let yi = 0; yi < count; yi++) {
                let x = sep * (xi - count / 2);
                let y = sep * (yi - count / 2);
                if (animate) {
                    let z = graph(x, y);
                }
                positions.push(x, z, y);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph, theme])


    useFrame(() => {
        if (animate) {
            t += 5 
            
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
        }
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
                color={theme === 'dark' ? '#00AAFF' : '#0300ab'}
                size={0.2}
                sizeAttenuation
                transparent={false}
                alphaTest={0.55}
                opacity={1}
            />
        </points>
    );
}

function AnimationCanvas({ theme, animate }) {
    return (
        <Canvas
            colorManagement={false}
            camera={{ position: [40, 5, 0], fov: 60 }}
        >
            <Suspense fallback={null}>
                <Points theme={theme} animate={animate}/>
            </Suspense>
        </Canvas>
    );
}


const Background = ({ theme, show, animate } ) => {
    return (
        <div id="Background" className="Background">
            {show && 
                <Suspense fallback={<div>Loading...</div>}>
                    <AnimationCanvas theme={theme} animate={animate}/>
                </Suspense>
            }
        </div>
    );
}

export default Background;
