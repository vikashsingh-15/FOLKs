export const formatDate = (date) => {
  const hour = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hour > 9 ? hour : `0${hour}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }`;
};
export const downloadMedia = (e, url) => {
  e.preventDefault();
  try {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;

        const nameSplit = url.split("/");
        const duplicateName = nameSplit.pop();

        a.download = "" + duplicateName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch((error) => {
        // console.error("Error downloading the file:", error);
      });
  } catch (err) {
    // console.log("Error while downloading the file", err);
  }
};
