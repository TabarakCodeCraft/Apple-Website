import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import MacbookModel16 from "../models/Macbook-16";
import MacbookModel14 from "../models/Macbook-14";

const ModelSwitcher = ({ isMobile, scale }) => {
  const smallMackbookRef = useRef();
  const largeMackbookRef = useRef();


  const controlsConfig = {};
  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMackbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMackbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
