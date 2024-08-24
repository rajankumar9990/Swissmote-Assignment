document.getElementById('connectWallet').addEventListener('click', function() {
    document.getElementById('walletAddress').textContent = 'Wallet Connected: 0x1234...abcd';
});

document.getElementById('flipCoin').addEventListener('click', function() {
    const wagerAmount = document.getElementById('wagerAmount').value;
    const selectedSide = document.querySelector('button.active')?.id;

    if (!wagerAmount || !selectedSide) {
        alert('Please enter a wager amount and select a side.');
        return;
    }

    const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('d-none');
    resultElement.classList.remove('alert-success', 'alert-danger', 'alert-info');

    if (flipResult === selectedSide) {
        resultElement.classList.add('alert-success');
        resultElement.textContent = `🎉 You won! You doubled your ${wagerAmount} tokens.`;
    } else {
        resultElement.classList.add('alert-danger');
        resultElement.textContent = `😢 You lost! You lose your ${wagerAmount} tokens.`;
    }

    // Add a temporary animation to the result display
    resultElement.classList.add('animate__animated', 'animate__fadeIn');
    setTimeout(() => {
        resultElement.classList.remove('animate__fadeIn');
    }, 1000);
});

// Toggle Active Class on Side Buttons
document.getElementById('heads').addEventListener('click', function() {
    document.getElementById('heads').classList.add('active');
    document.getElementById('tails').classList.remove('active');
});

document.getElementById('tails').addEventListener('click', function() {
    document.getElementById('tails').classList.add('active');
    document.getElementById('heads').classList.remove('active');
});
