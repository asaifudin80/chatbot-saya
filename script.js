function kirimPesan() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");

    const pesan = input.value.trim();

    if (pesan === "") {
        return;
    }

    // Menampilkan pesan pengguna
    chatbox.innerHTML += `
        <div class="user">
            ${pesan}
        </div>
    `;

    // Membuat jawaban chatbot
    let jawaban = "";

    if (pesan.toLowerCase().includes("halo")) {
        jawaban = "Halo juga! Senang bertemu dengan Anda 😊";
    } 
    else if (pesan.toLowerCase().includes("nama")) {
        jawaban = "Saya adalah chatbot sederhana.";
    } 
    else if (pesan.toLowerCase().includes("terima kasih")) {
        jawaban = "Sama-sama! 😊";
    } 
    else {
        jawaban = "Maaf, saya belum memahami pertanyaan tersebut.";
    }

    // Menampilkan jawaban chatbot
    chatbox.innerHTML += `
        <div class="bot">
            ${jawaban}
        </div>
    `;

    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}