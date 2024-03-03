document.addEventListener("DOMContentLoaded", function () {
    createMoney();
});

function createMoney() {
    const moneyRainContainer = document.querySelector('.money-rain');
    const maxMoneyCount = 15; // Maximum

    let moneyCount = 0;

    const intervalId = setInterval(function () {
        if (moneyCount < maxMoneyCount) {
            const money = document.createElement('div');
            money.className = 'money';
            money.textContent = '💀';
            money.style.left = Math.random() * window.innerWidth + 'px';
            money.style.animationDuration = Math.random() * 2 + 1 + 's';

            moneyRainContainer.appendChild(money);

            money.addEventListener('animationend', function () {
                money.remove();
                moneyCount--;
            });

            moneyCount++;
        } else {
            clearInterval(intervalId);
        }
    }, 500);
}
// this code was written by goldenman for hack everyone >:D