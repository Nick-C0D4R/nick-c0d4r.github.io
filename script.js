document.addEventListener("DOMContentLoaded", function () {
    // 1. Trade Balance Chart
    const ctxTrade = document.getElementById('tradeChart');
    if (ctxTrade) {
        new Chart(ctxTrade, {
            type: 'bar',
            data: {
                labels: ['Експорт (% ВВП)', 'Імпорт (% ВВП)'],
                datasets: [{
                    label: 'Торговельний баланс Нової Зеландії',
                    data: [23.7, 26.7],
                    backgroundColor: [
                        'rgba(40, 167, 69, 0.7)',
                        'rgba(220, 53, 69, 0.7)'
                    ],
                    borderColor: [
                        'rgba(40, 167, 69, 1)',
                        'rgba(220, 53, 69, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: '% від ВВП' }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Співвідношення Експорту та Імпорту (Коефіцієнт покриття ~0.89)'
                    }
                }
            }
        });
    }

    // 2. Macro Indicators Chart
    const ctxMacro = document.getElementById('macroChart');
    if (ctxMacro) {
        new Chart(ctxMacro, {
            type: 'radar',
            data: {
                labels: [
                    'Тривалість життя (Норма >78)',
                    'Витрати R&D (Норма >3%)',
                    'Смертність немовлят (Норма <4)',
                    'Покриття імпорту (Норма >1.0)',
                    'Держборг (Норма <20%)'
                ],
                datasets: [{
                    label: 'Фактичний рівень (Відносна шкала 0-100)',
                    data: [100, 50, 85, 60, 40],
                    fill: true,
                    backgroundColor: 'rgba(31, 73, 125, 0.2)',
                    borderColor: 'rgba(31, 73, 125, 1)',
                    pointBackgroundColor: 'rgba(31, 73, 125, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(31, 73, 125, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Профіль Економічної Безпеки (Пропорційний склад)'
                    }
                },
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
});
