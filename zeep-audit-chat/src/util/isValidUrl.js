/** @format */

const isValidUrl = (url) => {
  const urlRegex = /^(https?|ftp):\/\/([^\s/$.?#]+\.)+[^\s/$.?#]+[^\s]*$/;
  return urlRegex.test(url);
};

export default isValidUrl;
