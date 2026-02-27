
//Header Section

// cal of Total of job
export const jobCardArray = document.getElementsByClassName('job-card');

let totalJob = jobCardArray.length;
const totalJobLocation = document.getElementById('total-job');
totalJobLocation.innerText = totalJob;

export const jobStatusArray = document.getElementsByClassName('job-status');
// get job filter location
export let jobFilterLocation = document.getElementById('noOfJobFiltered');
console.log(totalJob);
jobFilterLocation.innerText = totalJob;

// cal of no of interview and no of rejected
let locationInterview = document.getElementById('no-of-interview');
let locationRejected = document.getElementById('no-of-rejected');

// Hide and unhide 
const hiddenElements = document.querySelectorAll('.hidden.job-card');

const noOfHiddenEle = hiddenElements.length;
export const hiddenUnhiddenEle = document.getElementById('hide-unhide');



// get job container 
export const jobContainer = document.getElementById('job-container');


export const allTab = document.querySelector('#btn-all');
export const interviewTab = document.querySelector('#btn-interview');
export const rejectedTabTab = document.querySelector('#btn-rejected');


document.getElementById('btn-all').addEventListener('click', function () {
    allTab.classList.add('text-white', 'bg-blue-700');
    interviewTab.classList.remove('text-white', 'bg-blue-700');
    rejectedTabTab.classList.remove('text-white', 'bg-blue-700');

    jobContainer.classList.add('all');
    jobContainer.classList.remove('interview', 'rejected');
    
    document.querySelector('#noOfJobFiltered').innerText = jobContainer.querySelectorAll('.job-card').length
    // add hidden to  id="hide-unhide"
    hiddenUnhiddenEle.classList.add('hidden');

    // remove hidden from id="hide-unhide" if no job card
    if (jobCardArray.length === 0) {

        hiddenUnhiddenEle.classList.remove('hidden');
    }

    // remove hidden form job card
    for (const item of jobCardArray) {
        item.classList.remove('hidden');
    }
})


jobContainer.addEventListener('click', function (event) {
    let noOfInterview = 0;
    let noOfIRejected = 0;

    // get job status btn
    const parentDivOfJobStatusBtn = event.target.parentNode;
    const jobStatusBtn = (parentDivOfJobStatusBtn.querySelector('.job-status'));

    // get interview btn
    const parentDivOfInterviewBtn = event.target.parentNode;
    const interviewBtn = (parentDivOfInterviewBtn.querySelector('.interview'));

    // get rejected btn
    const parentDivOfRejectedBtn = event.target.parentNode;
    const rejectedBtn = (parentDivOfRejectedBtn.querySelector('.rejected'));

    if (event.target.innerText === 'INTERVIEW') {
        // Update job status
        if (jobStatusBtn.innerText === 'NOT APPLIED' || jobStatusBtn.innerText === 'REJECTED') {
            jobStatusBtn.innerText = interviewBtn.innerText;
            jobStatusBtn.classList = interviewBtn.classList;
            jobStatusBtn.classList.remove('interview');
            jobStatusBtn.classList.add('job-status');

        }

    } else if (event.target.innerText === 'REJECTED') {

        if (jobStatusBtn.innerText === 'NOT APPLIED' || jobStatusBtn.innerText === 'INTERVIEW') {
            jobStatusBtn.innerText = rejectedBtn.innerText;
            jobStatusBtn.classList = rejectedBtn.classList;
            jobStatusBtn.classList.remove('rejected');
            jobStatusBtn.classList.add('job-status');

        }
    }

    // delete job card
    let deleteBtn = event.target;
    if (deleteBtn.classList.contains('delete-btn') || deleteBtn.classList.contains('delete-btn-container')) {
        let jobCard = deleteBtn;
        while (!jobCard.classList.contains('job-card')) {
            console.log(jobCard.classList);
            jobCard = jobCard.parentNode;
            console.log(jobCard.classList);
        }

        jobContainer.removeChild(jobCard);
        // reduce total job
        totalJob -= 1;
    }
    // update total job

    totalJobLocation.innerText = totalJob;
    jobFilterLocation.innerText = totalJob;

    // hide job card if job status change when interview btn active

    if (jobContainer.classList.contains('interview')) {
        let i = 0;
        console.log(jobContainer.classList.contains('interview'));
        for (const item of jobStatusArray) {
            console.log(item);

            if (item.innerText !== 'INTERVIEW') {
                let jobCard = item.parentNode.parentNode;
                jobCard.classList.add('hidden');

            } else if (item.innerText === 'INTERVIEW') {
                i += 1;
            }
            console.log(i);
            jobFilterLocation.innerText = i;

        }
        console.log(i);
        if (i === 0) {
            hiddenUnhiddenEle.classList.remove('hidden');
        }
    }

    // hide job card if job status change when rejected btn active
    if (jobContainer.classList.contains('rejected')) {
        let i = 0;
        for (const item of jobStatusArray) {
            

            if (item.innerText !== 'REJECTED') {
                
                let jobCard = item.parentNode.parentNode;
                jobCard.classList.add('hidden');
            } else if (item.innerText === 'REJECTED') {
                i += 1;
            }
        }
        console.log(i);
        // // jobFilterLocation.innerText = 0;
        jobFilterLocation.innerText = i;
        // jobFilterLocation.innerText = totalJob;
        console.log(i);
        if (i === 0) {
            hiddenUnhiddenEle.classList.remove('hidden');
        }
    }


    for (const jobStatus of jobStatusArray) {
        if (jobStatus.innerText === 'INTERVIEW') {
            console.log(noOfInterview += 1);
        } else if (jobStatus.innerText === 'REJECTED') {
            console.log(noOfIRejected += 1);
        }
    }

    console.log(noOfInterview);
    // update link
    locationInterview.innerText = noOfInterview;
    locationRejected.innerHTML = noOfIRejected;

    // Hide and unhide 

    if (noOfHiddenEle === totalJob) {

        hiddenUnhiddenEle.classList.remove('hidden');
    }
})

