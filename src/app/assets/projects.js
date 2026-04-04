export const projectDetails = {
  "smartcar-avoidance": {
    title: "Robotics Mentorship Program",

    overview: [
      "Pada program ini, saya berperan sebagai Mentor Ekstrakurikuler Robotika di SMP Xin Zhong Surabaya. Fokus utama saya adalah membangun fondasi berpikir sistematis dalam robotika, bukan hanya sekadar membuat robot yang “berjalan”.",
      "Setelah melakukan observasi terhadap kemampuan awal siswa, saya memilih Obstacle Avoidance Robot sebagai proyek utama dengan durasi ±6 bulan. Pemilihan ini bukan tanpa alasan mayoritas siswa sudah memiliki pengalaman dasar menggunakan block programming (Tinkercad), sehingga secara logika mereka sudah cukup siap untuk masuk ke level berikutnya: pemrograman berbasis sintaks (Arduino IDE).",
    ],
      description: [
    "Robot yang dikembangkan adalah robot mobil otonom yang mampu:",
    "Mendeteksi jarak menggunakan sensor",
    "Melakukan scanning lingkungan",
    "Mengambil keputusan arah secara mandiri",
    "Menghindari rintangan secara dinamis"
  ],
    hardware: [
      "Hardware :",
      "Arduino Uno R3",
      "Arduino Sensor Shield",
      "Ultrasonic Sensor (HC-SR04)",
      "Infrared (IR) Sensor",
      "Micro Servo (untuk scanning arah)",
      "Motor Driver L298N",
      "DC Gear Motor 3–6V",
      "Chassis Robot Car",
      "Step-down Converter 5V",
      "Battery Holder 3x 18650"
    ],

    problem: [
      "Masalah utama yang saya hadapi bukan terletak pada aspek teknis robot, melainkan pada pola pikir siswa. Sebagian besar siswa sangat bergantung pada block programming, terbiasa menggunakan sistem drag-and-drop tanpa benar-benar memahami apa yang terjadi di balik kode yang mereka susun. Selain itu, platform seperti Tinkercad memiliki keterbatasan yang cukup signifikan, baik dari sisi ketersediaan komponen, kesulitan dalam mengimplementasikan logika yang lebih kompleks, maupun keterbatasannya untuk digunakan dalam project yang lebih realistis dan scalable. Di sisi lain, pemahaman dasar robotika siswa juga masih rendah; banyak yang menganggap sensor sebagai sesuatu yang “ajaib” tanpa memahami bahwa sensor hanyalah alat ukur yang menghasilkan data, yang kemudian diproses untuk menghasilkan output tertentu.",
    ],

    solution: [
      "Pendekatan yang saya gunakan tidak langsung memaksa siswa untuk berpindah ke Arduino IDE, karena hal tersebut justru sering menjadi kesalahan umum bagi mentor pemula. Sebagai gantinya, saya menerapkan pendekatan bertahap yang berfokus pada pemahaman konsep terlebih dahulu. Saya mulai dengan menjembatani pemahaman mereka antara block programming dan kode nyata, menjelaskan bagaimana setiap block merepresentasikan struktur program seperti setup, loop, dan kondisi. Setelah itu, saya melakukan transisi secara perlahan, di mana siswa tetap menggunakan block programming namun mulai diperkenalkan dengan versi C++ dari program yang sama, hingga akhirnya mereka mampu menulis kode secara mandiri. Sepanjang proses tersebut, saya menekankan bahwa logika harus didahulukan sebelum coding, sehingga setiap fitur wajib diawali dengan pembuatan flowchart. Jika alur logika belum jelas, maka proses coding tidak dilanjutkan.",
    ],

    result: [
      "Pendekatan ini menghasilkan perubahan yang cukup signifikan. Siswa mulai beralih dari block programming ke Arduino IDE dengan pemahaman yang lebih kuat terhadap struktur program, cara kerja sensor, serta logika pengambilan keputusan. Robot obstacle avoidance yang mereka kembangkan berhasil mengimplementasikan sistem scanning aktif dan pengambilan keputusan berbasis data sensor, menunjukkan bahwa mereka tidak lagi sekadar mengikuti tutorial, tetapi mulai memahami sistem yang mereka bangun. Namun, terdapat trade-off yang memang saya ambil secara sadar, yaitu tidak memprioritaskan aspek mekanikal dan soldering pada tahap awal. Proses perakitan masih sebagian dibantu oleh mentor, karena fokus utama selama enam bulan pertama diarahkan pada pengembangan logika, pemahaman sistem, dan cara berpikir engineering.",
    ],

    image: "/projects/smartcar.jpg",

    images: [
      "/projects/smartcar.jpg"
    ],

    video: "",

    role: "Embedded Systems Developer",

    duration: "1–2 Weeks",

    links: {
      github: "",
      live: ""
    },

    insights: [
      "Simple logic is enough to build functional autonomous behavior.",
      "Sensor accuracy directly affects system performance."
    ]
  }
};