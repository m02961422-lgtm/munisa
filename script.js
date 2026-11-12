// Иваз кардани саҳифаҳо

function showPage(page, button) {

    document.querySelectorAll('.page').forEach(p => {
        p.classList.add('hidden');
    });

    document.getElementById(page).classList.remove('hidden');

    document.querySelectorAll('.menu button').forEach(b => {
        b.classList.remove('active');
    });

    button.classList.add('active');

    const titles = {
        dashboard: 'Dashboard',
        students: 'Донишҷӯён',
        grades: 'Журнали баҳоҳо',
        attendance: 'Давомот',
        rating: 'Рейтинги донишҷӯён',
        schedule: 'Ҷадвали дарсӣ'
    };

    document.getElementById('title').innerText = titles[page];
}


// Ҷустуҷӯи донишҷӯён

function searchStudents() {

    let input = document
        .getElementById('studentSearch')
        .value.toLowerCase();

    let rows = document.querySelectorAll('#studentTable tr');

    rows.forEach((row, index) => {

        if (index === 0) return;

        row.style.display =
            row.innerText.toLowerCase().includes(input)
            ? ''
            : 'none';

    });

}