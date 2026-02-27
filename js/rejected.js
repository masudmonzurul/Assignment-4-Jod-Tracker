import { jobContainer, jobStatusArray, jobCardArray, jobFilterLocation, hiddenUnhiddenEle, allTab, interviewTab, rejectedTabTab } from "./all.js";

document.getElementById('btn-rejected').addEventListener('click', function () {
    rejectedTabTab.classList.add('text-white', 'bg-blue-700');
    allTab.classList.remove('text-white', 'bg-blue-700');
    interviewTab.classList.remove('text-white', 'bg-blue-700');


    jobContainer.classList.add('rejected');
    jobContainer.classList.remove('all', 'interview');



    // add hidden to  id="hide-unhide"
    hiddenUnhiddenEle.classList.add('hidden');

    console.log(hiddenUnhiddenEle.classList);


    // remove hidden form job card
    for (const item of jobCardArray) {
        item.classList.remove('hidden');
    }

    for (const item of jobStatusArray) {
        if (item.innerText !== 'REJECTED') {
            let jobCard = item.parentNode.parentNode;
            jobCard.classList.add('hidden');
        }
    }

    // hide job card if job status change when interview btn active

    if (jobContainer.classList.contains('rejected')) {
        let i = 0;

        if (jobStatusArray.length === 0) {
            hiddenUnhiddenEle.classList.remove('hidden');
        } else {
            for (const item of jobStatusArray) {
                if (item.innerText !== 'REJECTED') {
                    let jobCard = item.parentNode.parentNode;
                    jobCard.classList.add('hidden');
                } else if (item.innerText === 'REJECTED') {
                    i += 1;
                }
            }
            jobFilterLocation.innerText = i;
            if (i === 0) {
                hiddenUnhiddenEle.classList.remove('hidden');
            }
        }
    }
})




