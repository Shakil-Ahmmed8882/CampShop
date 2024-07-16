
export const uploadImage = async (image: string) => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
        method: "POST",
        body: formData
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data?.data;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error; // Re-throw the error so it can be handled by the caller
    }
  };
  


//   export const deleteImage = async (deleteUrl: string) => {
//     try {
//       const response = await fetch(deleteUrl, {
//         method: "POST",
//         credentials:"include"
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       console.log('Image deleted successfully:', data);
//       return data;
//     } catch (error) {
//       console.error('Error deleting image:', error);
//       throw error;
//     }
//   };
  