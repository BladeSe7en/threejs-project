import { Plane } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";




// It allows you to input a color as an argument
// The material used will have been built by a mesh material
// Remember, you can still add other attributes in the object created
// We won't add it's mass since itwill begin to fall
function PhyPlane({ color, ...props }) {
    const [ref] = usePlane(() => ({ ...props }));

    return (
        <Plane args={[1000, 1000]} ref={ref}>
            <meshStandardMaterial color={color} />
        </Plane>
    );
}

export default PhyPlane;