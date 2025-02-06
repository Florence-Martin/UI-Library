import { useState } from "react";

export const useReplayAnimation = () => {
  const [keys, setKeys] = useState<{ [key: string]: number }>({});

  const replay = (componentName: string) => {
    setKeys((prevKeys) => ({
      ...prevKeys,
      [componentName]: (prevKeys[componentName] || 0) + 1,
    }));
  };

  return { keys, replay };
};
