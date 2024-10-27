// Import all images dynamically from the "images" folder
const importAllImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((item) => {
      images[item.replace('./', '')] = requireContext(item);
    });
    return images;
  };
  
  // Load all images from the "./images" folder
  const images = importAllImages(require.context('./images', true, /\.(png|jpe?g|svg)$/));
  
  export default images;
  