async function FetchImg(url) {
  try {
    const response = await fetch(url);
    const img = await response.blob();
    document.getElementById("main").innerHTML = img;
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}
//FetchImg("cc-tree.jpg");