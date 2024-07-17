function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseFloat(document.getElementById('age').value);

    if (height > 0 && weight > 0 && gender && age > 0) {
        const bmi = weight / ((height / 100) ** 2);
        let category = '';
        let advice = '';

        if (age < 18) {
            if (bmi < 18.5) {
                category = 'Underweight (Anak-anak)';
                advice = 'Anda berada dalam kategori kekurangan berat badan. Sebaiknya perbaiki pola makan dan konsultasikan dengan ahli gizi atau dokter anak.';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal weight (Anak-anak)';
                advice = 'Anda berada dalam kategori berat badan normal. Pertahankan pola makan sehat dan aktif bergerak.';
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'Overweight (Anak-anak)';
                advice = 'Anda berada dalam kategori kelebihan berat badan. Sebaiknya jaga pola makan dan tingkatkan aktivitas fisik.';
            } else {
                category = 'Obese (Anak-anak)';
                advice = 'Anda berada dalam kategori obesitas. Sebaiknya segera konsultasikan dengan dokter atau ahli gizi untuk mendapatkan penanganan yang tepat.';
            }
        } else if (age >= 18 && age < 65) {
            if (bmi < 18.5) {
                category = 'Underweight';
                advice = (gender === 'man') ?
                    'Anda berada dalam kategori kekurangan berat badan. Sebaiknya perbaiki pola makan dan konsultasikan dengan ahli gizi.' :
                    'Anda berada dalam kategori kekurangan berat badan. Perhatikan asupan gizi dan pertimbangkan untuk konsultasi dengan ahli gizi.';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal weight';
                advice = (gender === 'man') ?
                    'Anda berada dalam kategori berat badan normal. Pertahankan pola makan sehat dan rutin berolahraga.' :
                    'Anda berada dalam kategori berat badan normal. Tetap pertahankan gaya hidup sehat dan aktif.';
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'Overweight';
                advice = (gender === 'man') ?
                    'Anda berada dalam kategori kelebihan berat badan. Sebaiknya jaga pola makan dan tingkatkan aktivitas fisik.' :
                    'Anda berada dalam kategori kelebihan berat badan. Perhatikan pola makan dan aktif bergerak.';
            } else {
                category = 'Obese';
                advice = (gender === 'man') ?
                    'Anda berada dalam kategori obesitas. Sebaiknya segera konsultasikan dengan dokter atau ahli gizi untuk mendapatkan penanganan yang tepat.' :
                    'Anda berada dalam kategori obesitas. Pertimbangkan untuk berkonsultasi dengan profesional kesehatan untuk penanganan yang tepat.';
            }
        } else {
            if (bmi < 18.5) {
                category = 'Underweight (Lansia)';
                advice = 'Anda berada dalam kategori kekurangan berat badan. Sebaiknya perbaiki pola makan dan konsultasikan dengan dokter atau ahli gizi untuk memastikan kesehatan yang optimal.';
            } else if (bmi >= 18.5 && bmi < 24.9) {
                category = 'Normal weight (Lansia)';
                advice = 'Anda berada dalam kategori berat badan normal. Pertahankan pola makan sehat dan aktif secara fisik untuk mendukung kesehatan yang baik.';
            } else if (bmi >= 25 && bmi < 29.9) {
                category = 'Overweight (Lansia)';
                advice = 'Anda berada dalam kategori kelebihan berat badan. Sebaiknya jaga pola makan dan tingkatkan aktivitas fisik sesuai dengan kemampuan dan kesehatan Anda.';
            } else {
                category = 'Obese (Lansia)';
                advice = 'Anda berada dalam kategori obesitas. Sebaiknya segera konsultasikan dengan dokter atau ahli gizi untuk mendapatkan penanganan yang tepat dan memastikan kesejahteraan Anda.';
            }
        }

        document.getElementById('result').innerHTML = `BMI Anda adalah ${bmi.toFixed(2)} (${category})`;
        document.getElementById('advice').innerHTML = advice;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan nilai tinggi, berat, jenis kelamin, dan usia yang valid.';
        document.getElementById('advice').innerHTML = '';
    }
}
