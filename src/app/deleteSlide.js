export default function deleteSlide() {
    setTimeout(() => {
        document.getElementById('carousel-slide1')?.remove();
        console.log("Variable 'x' deleted after 30 seconds");
      }, 3000);
    return
}