function showDetails(id) {
    const detailElement = document.getElementById(id);
    if (detailElement.style.display === "none") {
        detailElement.style.display = "block";
    } else {
        detailElement.style.display = "none";
    }
}