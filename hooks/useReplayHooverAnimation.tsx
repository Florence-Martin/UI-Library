import { useState } from "react";

export const useReplayHooverAnimation = () => {
  const [keys, setKeys] = useState<{ [key: string]: number }>({});

  const replay = (componentName: string) => {
    setKeys((prevKeys) => ({
      ...prevKeys,
      [componentName]: (prevKeys[componentName] || 0) + 1,
    }));
  };

  const replayOnHover = (componentName: string) => () => {
    // Incrémenter la clé pour relancer l'animation au passage de la souris
    replay(componentName);
  };

  return { keys, replay, replayOnHover };
};
