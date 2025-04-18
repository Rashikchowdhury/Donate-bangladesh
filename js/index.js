// clicking blog btn 
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = "./blog.html"
});


// clicking donation btn
document.getElementById('donation-btn').addEventListener('click', function () {
    // mark the section btn 
    document.getElementById('donation-btn').classList.remove('bg-pri-btn-clr');
    document.getElementById('history-btn').classList.add('bg-pri-btn-clr');


    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('donation-section').classList.add('flex');

    // hide another section 
    document.getElementById('history-section').classList.add('hidden');
});


// clicking history btn
document.getElementById('history-btn').addEventListener('click', function () {
    document.getElementById('history-btn').classList.remove('bg-pri-btn-clr');
    document.getElementById('donation-btn').classList.add('bg-pri-btn-clr');


    document.getElementById('history-section').classList.remove('hidden');

    // hide another sections 
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('donation-section').classList.remove('flex');
})


// donation fot noakhali 
document.getElementById('noakhali-donate-btn').addEventListener('click', function () {
    const mainBalance = getInnerTextById('main-balance');
    const noakhaliBalance = getInnerTextById('noakhali-balance');
    const noakhaliInput = getInputValueById('noakhali-input');

    if (noakhaliInput > 0 && noakhaliInput <= mainBalance && typeof noakhaliInput === 'number') {
        const newMainBalance = mainBalance - noakhaliInput;
        const newNoakhaliBalance = noakhaliBalance + noakhaliInput;

        document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        document.getElementById('noakhali-input').value = "";
        
        document.getElementById('success-modal').showModal();

    }
    else {
        document.getElementById('fail-modal').showModal();

        document.getElementById('noakhali-input').value = "";
    }
})

// donation for feni
document.getElementById('feni-donate-btn').addEventListener('click', function () {
    const mainBalance = getInnerTextById('main-balance');
    const feniBalance = getInnerTextById('feni-balance');
    const feniInput = getInputValueById('feni-input');

    if (feniInput > 0 && feniInput <= mainBalance && typeof feniInput === 'number') {
        const newMainBalance = mainBalance - feniInput;
        const newfeniBalance = feniBalance + feniInput;

        document.getElementById('feni-balance').innerText = newfeniBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        document.getElementById('feni-input').value = "";
        
        document.getElementById('success-modal').showModal();

    }
    else {
        document.getElementById('fail-modal').showModal();

        document.getElementById('feni-input').value = "";
    }
})

// donation for quota
document.getElementById('quota-donate-btn').addEventListener('click', function () {
    const mainBalance = getInnerTextById('main-balance');
    const quotaBalance = getInnerTextById('quota-balance');
    const quotaInput = getInputValueById('quota-input');

    if (quotaInput > 0 && quotaInput <= mainBalance && typeof quotaInput === 'number') {
        const newMainBalance = mainBalance - quotaInput;
        const newquotaBalance = quotaBalance + quotaInput;

        document.getElementById('quota-balance').innerText = newquotaBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        document.getElementById('quota-input').value = "";
        
        document.getElementById('success-modal').showModal();

    }
    else {
        document.getElementById('fail-modal').showModal();

        document.getElementById('quota-input').value = "";
    }
})