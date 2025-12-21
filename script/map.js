function search() {
  const q = encodeURIComponent(
    document.getElementById("keyword").value
  );
  if (q == "") {
  }else{
      location.href =
        "https://www.google.com/maps/search/?api=1&query=" + q;
  }
}