import { useState } from "react";

export const useHeaderHook = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [authorization, setAuthorization] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleAuthorization = () => {
    setAuthorization(!authorization);
  };

  return {
    openMenu,
    authorization,
    handle: { handleOpenMenu, handleAuthorization },
  };
};
