// Box and planes are individual 3D components
// Suspense is used to hold items in air when the window loads before they begin to fall due to their mass and gravitational effect
// useMemo shall be used to avoid expensive calculations each time it is rendered hence it is optimized. Check it out at https://reactjs.org/docs/hooks-reference.html#usememo
// useLoader is a hook which loads assets and suspends for easier fallback- and error-handling
// Physics brings in the Physics effect in the environment
// useBox, usePlane, useSphere and many more from cannon are used to import the models used in this project
// niceColors are used for beautification of objects
import * as THREE from 'three'
import { Box, Plane } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { Physics} from "@react-three/cannon";
import niceColors from 'nice-color-palettes';
import "./index.css";
import PhyBox from './Components.js/PhyBox';
import PhyPlane from './Components.js/PhyPlane';

function App() {
  return (

      // Canvas holds all our items and scene
      // Set camera position and focus
      <Canvas camera={{ position: [0, 0, 0], near: 0.1, far: 1000 }}>

          {/* // Set gravity
          // All items we want to see the effect of gravity on them shall be inside the Physics tags
          // These include the planes and boxes and any other models
          // Four planes are created which shall hold the contents as a platform */}
          <Physics gravity={[0, -10, 0]}>
              <PhyPlane
                  color={niceColors[17][5]}
                  position={[0, -2, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
              />
              <PhyPlane color={niceColors[17][2]} position={[0, 0, -10]} />
              <PhyPlane color={niceColors[17][3]} position={[-6, 0, -10]} rotation={[0, 2, 0]} />
              <PhyPlane color={niceColors[17][1]} position={[6, 0, -10]} rotation={[0, -2, 0]} />

              {/* // Three objects are placed in different positions in the x, y, and z axis */}
              <PhyBox position={[2, 0, -5]} />
              <PhyBox position={[0, 0, -5]} />
              <PhyBox position={[-2, 0, -5]} />
          </Physics>

          {/* // This is for provision of ambient lighting in the scene */}
          <ambientLight intensity={0.3} />

          {/* // We have added some pointLight here at the position showed */}
          <pointLight intensity={0.8} position={[5, 0, 5]} />

          {/* // Apart from ambient light and point light, you can add others such as fog */}
      </Canvas>
  );
}

export default App;
