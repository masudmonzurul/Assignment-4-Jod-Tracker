import { jobContainer, jobStatusArray, jobCardArray, jobFilterLocation, hiddenUnhiddenEle, allTab, interviewTab, rejectedTabTab } from "./all.js";

document.getElementById('btn-interview').addEventListener('click', function () {

    interviewTab.classList.add('text-white', 'bg-blue-700');
    allTab.classList.remove('text-white', 'bg-blue-700');
    rejectedTabTab.classList.remove('text-white', 'bg-blue-700');


    jobContainer.classList.add('interview');
    jobContainer.classList.remove('all', 'rejected');

    // add hidden to  id="hide-unhide"
    hiddenUnhiddenEle.classList.add('hidden');


    // remove hidden form job card
    for (const item of jobCardArray) {
        item.classList.remove('hidden');
    }

    // add hidden
    for (const item of jobStatusArray) {


        if (item.innerText !== 'INTERVIEW') {
            let jobCard = item.parentNode.parentNode;
            jobCard.classList.add('hidden');
        }
    }

    // hide job card if job status change when interview btn active

    if (jobContainer.classList.contains('interview')) {
        let i = 0;
        if (jobStatusArray.length === 0) {
            hiddenUnhiddenEle.classList.remove('hidden');
        } else {
            for (const item of jobStatusArray) {
                if (item.innerText !== 'INTERVIEW') {
                    let jobCard = item.parentNode.parentNode;
                    console.log(jobCard);
                    jobCard.classList.add('hidden');
                } else if (item.innerText === 'INTERVIEW') {
                    i += 1;
                }
                // update job filter
            }
            jobFilterLocation.innerText = i;

            if (i === 0) {
                hiddenUnhiddenEle.classList.remove('hidden');
            }
            console.log(i);
        }
    }
})

