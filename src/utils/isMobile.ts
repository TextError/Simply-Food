const isMobile = () => {
  const isNavigator = typeof navigator !== 'undefined' && navigator && typeof navigator.sendBeacon === 'function';

  if(isNavigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return true;
  };
  return false;
};

export default isMobile;