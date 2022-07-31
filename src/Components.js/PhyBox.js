import { Box } from "@react-three/drei";
import { useBox } from "@react-three/cannon";



// It has a mass so that it will always be under a gravitational effect to fall
// We have put in some trigger events which will cause some action to occur; that is on-click
// They shall be built out of a mesh material
function PhyBox(props) {
    const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

    return (
        <Box
            args={[1, 1, 1]}
            ref={ref}
            onClick={() =>

                // This shoots the object when clicked on
                api.applyImpulse([0, 5, -10], [1, 1, 1])
                &&

                // This makes the object fly upwards when clicked on

                api.velocity.set(0, 2, 0)

            }
        >
            <meshNormalMaterial />
        </Box>
    );
}

export default PhyBox;