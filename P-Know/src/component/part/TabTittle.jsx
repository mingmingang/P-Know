import React, { useEffect } from 'react';

const changeFavicon = (iconURL) => {
  const link = document.querySelector("link[rel~='icon']");
  if (!link) {
    const newLink = document.createElement('link');
    newLink.rel = 'icon';
    newLink.href = iconURL;
    document.head.appendChild(newLink);
  } else {
    link.href = iconURL;
  }
};

const MyComponent = () => {
  useEffect(() => {
    changeFavicon('src\assets\P - KNOW.ico');
    return () => {
      changeFavicon('src\assets\P - KNOW.ico');
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default MyComponent;
